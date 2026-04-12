"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Loader2,
  Maximize2,
  Minimize2,
  Sprout,
  TreeDeciduous,
  VolumeX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  GAME_STAGE_HEIGHT,
  GAME_STAGE_WIDTH,
  RETURN_MAN_2_IFRAME_SRC,
} from "@/lib/game-config";

type GameContainerProps = {
  iframeSrc?: string;
  iframeTitle: string;
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function LoadingOverlay({
  loaded,
  loadError,
  reducedMotion,
}: {
  loaded: boolean;
  loadError: boolean;
  reducedMotion: boolean;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loaded || loadError) return;
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 90) return p;
        return Math.min(90, p + 4 + Math.random() * 6);
      });
    }, 220);
    return () => window.clearInterval(id);
  }, [loaded, loadError, reducedMotion]);

  useEffect(() => {
    if (loaded) setProgress(100);
  }, [loaded]);

  if (loadError || loaded) return null;

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-zinc-950/95 via-emerald-950/40 to-zinc-950/95 px-6 text-white backdrop-blur-sm"
        role="status"
        aria-live="polite"
      >
        <Loader2 className="size-10 animate-spin text-emerald-400" aria-hidden />
        <span className="text-sm font-medium text-amber-100/90">
          Loading game…
        </span>
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-zinc-950/95 via-emerald-950/40 to-zinc-950/95 px-6 text-white backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="flex flex-wrap items-center justify-center gap-2 text-center text-sm font-medium tracking-wide text-amber-100/95">
        <Sprout className="size-5 shrink-0 animate-pulse text-emerald-400" aria-hidden />
        <span>Growing the field — seed to stadium</span>
        <TreeDeciduous
          className="size-5 shrink-0 animate-pulse text-emerald-400"
          aria-hidden
        />
      </p>
      <div className="relative h-3 w-full max-w-xs overflow-hidden rounded-full bg-zinc-800/90 ring-1 ring-amber-500/25">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-600 via-emerald-500 to-emerald-400 transition-[width] duration-300 ease-out"
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>
      <span className="text-xs tabular-nums text-zinc-400">
        {Math.round(Math.min(100, progress))}%
      </span>
    </div>
  );
}

export function GameContainer({
  iframeSrc = RETURN_MAN_2_IFRAME_SRC,
  iframeTitle,
}: GameContainerProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (loaded || loadError) return;
    const id = window.setTimeout(() => setLoadError(true), 30_000);
    return () => window.clearTimeout(id);
  }, [loaded, loadError, iframeKey]);

  const toggleFullscreen = useCallback(async () => {
    const el = stageRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) await el.requestFullscreen();
      else await document.exitFullscreen();
    } catch {
      /* embed may block fullscreen in some browsers */
    }
  }, []);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-800/80 px-2 py-0.5 ring-1 ring-white/10">
            <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
            640×450 stage
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-800/80 px-2 py-0.5 ring-1 ring-white/10">
            Arrows / IJKL
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-800/80 px-2 py-0.5 ring-1 ring-white/10">
            A · S · D moves
          </span>
        </p>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="border border-amber-500/25 bg-zinc-800/90 text-amber-50 hover:bg-zinc-700/90"
            onClick={toggleFullscreen}
            aria-pressed={fullscreen}
            aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {fullscreen ? (
              <Minimize2 className="size-4" />
            ) : (
              <Maximize2 className="size-4" />
            )}
            <span className="ml-1 hidden sm:inline">
              {fullscreen ? "Exit" : "Fullscreen"}
            </span>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-zinc-600 bg-zinc-900/50 text-zinc-300"
            disabled
            title="Mute is not available for this embedded player"
            aria-disabled="true"
          >
            <VolumeX className="size-4" />
            <span className="ml-1 hidden sm:inline">Mute</span>
          </Button>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative flex min-h-[min(88dvh,100svh)] w-full items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-2 py-6 [background-image:radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.12),transparent_55%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(245,158,11,0.08),transparent_50%)]"
      >
        <LoadingOverlay
          loaded={loaded}
          loadError={loadError}
          reducedMotion={reducedMotion}
        />

        {loadError ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-zinc-950/95 p-6 text-center text-white">
            <Loader2 className="size-10 animate-spin text-amber-400" aria-hidden />
            <p className="max-w-md text-sm text-zinc-300">
              The game could not be loaded in the frame. Check your connection
              or try again.
            </p>
            <Button
              type="button"
              variant="secondary"
              className="border border-amber-500/40 bg-amber-600 text-white hover:bg-amber-500"
              onClick={() => {
                setLoadError(false);
                setLoaded(false);
                setIframeKey((k) => k + 1);
              }}
            >
              Retry
            </Button>
          </div>
        ) : null}

        <div
          className="group relative max-w-full rounded-2xl bg-gradient-to-br from-amber-400/90 via-amber-500/50 to-emerald-600/70 p-[3px] shadow-[0_0_0_1px_rgba(251,191,36,0.15),0_25px_60px_-15px_rgba(0,0,0,0.75),0_0_80px_-20px_rgba(16,185,129,0.35)] ring-1 ring-amber-400/20"
          style={{
            aspectRatio: `${GAME_STAGE_WIDTH} / ${GAME_STAGE_HEIGHT}`,
            width: `min(calc(100vw - 1rem), calc(85dvh * ${GAME_STAGE_WIDTH} / ${GAME_STAGE_HEIGHT}))`,
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[13px] bg-zinc-950 ring-1 ring-black/60">
            <div
              className="pointer-events-none absolute inset-0 rounded-[13px] opacity-40 shadow-[inset_0_0_60px_rgba(0,0,0,0.85)]"
              aria-hidden
            />
            <iframe
              key={iframeKey}
              title={iframeTitle}
              src={iframeSrc}
              className="absolute inset-0 h-full w-full rounded-[12px] border-0 bg-black"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => {
                setLoaded(true);
                setLoadError(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
