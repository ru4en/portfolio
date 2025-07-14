export function isInCenter(card: HTMLElement, container: HTMLElement): boolean {
  const cardRect = card.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const cardCenter = cardRect.left + cardRect.width / 2;
  const containerCenter = containerRect.left + containerRect.width / 2;
  // Allow a margin of error (e.g., 30px)
  return Math.abs(cardCenter - containerCenter) < 30;
}