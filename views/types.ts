import { BrowserWindow } from "electron/main";

export interface Window {
    payload: BrowserWindow | undefined,
    open(): BrowserWindow,
    close(): void
}