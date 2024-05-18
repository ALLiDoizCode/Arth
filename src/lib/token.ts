import { writable, type Writable } from 'svelte/store';
import type { TokenCanister } from './declarations/token_canister_backend/token_canister_backend.did';

export let tokenCanisterActor: Writable<TokenCanister> = writable();
