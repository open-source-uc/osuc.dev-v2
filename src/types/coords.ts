interface Leader {
  name: string;
  role: string;
  description: string;
  github: string | null;
  linkedin: string | null;
  instagram: string | null;
}

interface OldCoord {
  name: string;
  description: string;
  githubUser: string | null;
}

export interface CoordData {
  semester: string;
  leaders: Leader[];
}

export interface OldCoordData {
  year: string;
  leaders: OldCoord[];
}
