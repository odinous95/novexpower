import { createService } from "./service";

export function createContact() {
  const service = createService();

  return {
    service,
  };
}
