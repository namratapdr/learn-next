import React from "react";

export type DarkModeState = 'dark' | 'light';
export type SetDarkModeState = React.Dispatch<React.SetStateAction<DarkModeState>>;
