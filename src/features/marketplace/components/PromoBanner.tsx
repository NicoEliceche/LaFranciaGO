import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  PromoBannerArrow,
  PromoBannerCopy,
  PromoBannerIcon,
  PromoBannerShell,
  PromoBannerText,
  PromoBannerTitle,
} from './PromoBannerStyled';

type PromoBannerProps = {
  to: string;
  title: string;
  text?: string;
  icon: LucideIcon;
  tone?: 'brand' | 'dark';
};

/**
 * Banner de captación (sumar comercio / trabajar con nosotros).
 * Va al final de Inicio, según lo pedido en la última reunión.
 */
export function PromoBanner({ to, title, text, icon: Icon, tone = 'brand' }: PromoBannerProps) {
  return (
    <PromoBannerShell to={to} data-tone={tone}>
      <PromoBannerIcon>
        <Icon size={22} aria-hidden="true" />
      </PromoBannerIcon>

      <PromoBannerCopy>
        <PromoBannerTitle>{title}</PromoBannerTitle>
        {text ? <PromoBannerText>{text}</PromoBannerText> : null}
      </PromoBannerCopy>

      <PromoBannerArrow>
        <ChevronRight size={18} aria-hidden="true" />
      </PromoBannerArrow>
    </PromoBannerShell>
  );
}
