import { Router } from "express";

export const forceReload = () => {
    Router.reload();
}