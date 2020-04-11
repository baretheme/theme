import { readNavigation } from '@baretheme/fs';

export async function getNavigation() {
  return readNavigation();
}
