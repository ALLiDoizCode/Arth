import { writable, type Writable } from 'svelte/store';
import type { TokenCanister } from './declarations/token_canister_backend/token_canister_backend.did';
export const token_canisteranister_id = "yxccl-myaaa-aaaak-qihga-cai";

export let governanceActor: Writable<TokenCanister> = writable();
