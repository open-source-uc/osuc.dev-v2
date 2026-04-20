export interface Leader {
  name: string;
  role: string;
  description: string;
  github: string | null;
  linkedin: string | null;
  instagram: string | null;
}

export interface OldCoordData {
  year: string;
  leaders: Leader[];
}
