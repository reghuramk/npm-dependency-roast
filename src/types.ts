export interface PackageJson {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  peerDependencies: Record<string, string>;
}
