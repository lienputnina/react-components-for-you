import type { FC, ReactNode } from 'react';

interface WithGrayBackgroundProps {
  children: ReactNode;
}

export const WithGrayBackground: FC<WithGrayBackgroundProps> = ({
  children,
}) => (
  <div style={{ backgroundColor: '#d3d3d3', padding: '1rem' }}>{children}</div>
);
