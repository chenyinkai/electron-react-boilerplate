/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import { URL } from 'url';
import path from 'path';
import { Coordinates } from '../types/sprite';

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  resolveHtmlPath = (htmlFileName: string) => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  };
} else {
  resolveHtmlPath = (htmlFileName: string) => {
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
  };
}

export function convertJson2MapboxStyle(
  source: Coordinates,
  pixelRatio: number
): string {
  const targetObj = {};
  Object.keys(source).forEach((item) => {
    const newKeyArr = item.split(process.platform === 'win32' ? '\\' : '/');
    const newKey = newKeyArr[newKeyArr.length - 1].split('.')[0];
    Object.assign(targetObj, {
      [newKey]: {
        ...source[item],
        pixelRatio,
      },
    });
  });
  return JSON.stringify(targetObj);
}
