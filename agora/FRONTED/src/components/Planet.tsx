// Planet.tsx
import React, { ReactNode, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";

import { CreateCSSProperties, CSSProperties } from "@material-ui/styles";
import useResizeObserver from "use-resize-observer";
import { DragableContainer } from "./DragableContainer";
import { Satellite } from "./Satellite";

const DEFAULT_MASS = 1;
const DEFAULT_TENSION = 500;
const DEFAULT_FRICTION = 17;
const DEFAULT_ROTATION = 0;
const DEFAULT_RADIUS = 100;

interface Props {
  centerContent?: ReactNode;
  children?: ReactNode;
  open?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  mass?: number;
  tension?: number;
  friction?: number;
  orbitStyle?: (
    defaultStyle: CSSProperties | CreateCSSProperties<{}>
  ) => CSSProperties | CreateCSSProperties<{}>;
  orbitRadius?: number;
  rotation?: number;
  hideOrbit?: boolean;
  autoClose?: boolean;
  onClose?: (
    e: React.MouseEvent<Document | HTMLDivElement, MouseEvent>
  ) => void;
  dragablePlanet?: boolean;
  dragRadiusPlanet?: number;
  dragableSatellites?: boolean;
  dragRadiusSatellites?: number;
  bounceRadius?: number;
  bounce?: boolean;
  bounceOnOpen?: boolean;
  bounceOnClose?: boolean;
  bounceDirection?:```
