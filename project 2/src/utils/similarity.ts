export function jaccard_similarity(set1: string[], set2: string[]): number {
  const set1Set = new Set(set1);
  const set2Set = new Set(set2);
  
  const intersection = new Set([...set1Set].filter(x => set2Set.has(x)));
  const union = new Set([...set1Set, ...set2Set]);
  
  return union.size ? intersection.size / union.size : 0;
}