import { REALSCOUT_SCRIPT_SRC } from '@/config/realscout';

let realscoutAssets: Promise<void> | null = null;

/**
 * Load the RealScout web-components bundle once. Keep custom-element markup
 * static; only the script is deferred until a widget is near the viewport.
 */
export function loadRealScoutScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (realscoutAssets) return realscoutAssets;
  if (document.querySelector(`script[src="${REALSCOUT_SCRIPT_SRC}"]`)) {
    realscoutAssets = Promise.resolve();
    return realscoutAssets;
  }

  realscoutAssets = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = REALSCOUT_SCRIPT_SRC;
    script.type = 'module';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('RealScout script failed to load'));
    document.body.appendChild(script);
  });

  return realscoutAssets;
}
