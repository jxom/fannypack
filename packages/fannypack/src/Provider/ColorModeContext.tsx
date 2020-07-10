import * as React from 'react';

export const ColorModeContext = React.createContext<any>({ setColorMode: () => {}, colorMode: 'default' });

type Props = {
  children: React.ReactNode;
  mode: string;
};

export function Provider(props: Props) {
  const { children, mode: defaultMode } = props;

  ////////////////////////////////////

  const [mode, setMode] = React.useState(localStorage.getItem('fp.colorMode') || defaultMode);

  ////////////////////////////////////

  const setColorMode = React.useCallback((colorMode) => {
    setMode(colorMode);
    localStorage.setItem('fp.colorMode', colorMode);
  }, []);

  ////////////////////////////////////

  const value = React.useMemo(
    () => ({
      colorMode: mode,
      setColorMode,
    }),
    [mode, setColorMode]
  );

  ////////////////////////////////////

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}
