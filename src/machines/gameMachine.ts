import { createMachine } from "xstate";

export const gameMachine = createMachine({
  id: "Game Machine",
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgHEBDAWzAAIBZIgYwAsBLDMfEABy1gYBcGsNWAD0QBaAEwBmAHQBWGQAZFANjGqZADgDsEsevQBPRAEZ5MqZoAs8lZIkBOC0c2aZyNCGJkqtRsykAZLCIIJihybhxOVg4uXn4hRDELKQsLO3SJZ0sjMSVNMQNjOzEpdQkLTI1cnSVXN2QgA */
  initial: "Init board",
  schemas: {
    events: {} as { type: "Init board"; board: Array<string | null> },
  },
  states: {
    "Init board": {},
  },
});
