"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4936b403-b095-420f-9cb0-c4d962bf246a");
  }, []);

  return null;
};
