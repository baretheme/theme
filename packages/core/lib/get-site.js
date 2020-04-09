import { readSite } from '@baretheme/fs';

export async function getSite() {
  return readSite();
}
