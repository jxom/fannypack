import * as React from 'react';

export function applyTheme<ThemeConfig>(Comp: React.FunctionComponent<any>, theme: ThemeConfig) {
  return function <Props>(props: Props) {
    return (
      <Comp
        {...props}
        // @ts-ignore
        overrides={{ ...props.overrides, [Comp.displayName]: { ...props.overrides?.[Comp.displayName], ...theme } }}
      />
    );
  };
}
