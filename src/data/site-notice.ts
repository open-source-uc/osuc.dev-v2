export type SiteNoticeTone = "info" | "success" | "warning";

export interface SiteNotice {
    enabled: boolean;
    message: string;
    href?: string;
    ctaLabel?: string;
    tone?: SiteNoticeTone;
}

export const SITE_NOTICE: SiteNotice = {
    enabled: false,
    message: "Abrimos inscripciones, ¡no te quedes fuera!",
    href: "https://apply.osuc.dev",
    ctaLabel: "Inscribete aquí.",
    tone: "info",
};
