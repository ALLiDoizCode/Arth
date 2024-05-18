import { writable, type Writable } from 'svelte/store';
import type { TokenCanister } from './declarations/token_canister_backend/token_canister_backend.did';
import { createActor } from './declarations/token_canister_backend';
import type { CreateActorOptions } from './declarations/token_canister_backend';
import type {
    ActorSubclass,
    HttpAgentOptions,
    ActorConfig,
    Agent,
    Identity,
} from "@dfinity/agent";
import * as identity from "@dfinity/identity";

const canister = "yxccl-myaaa-aaaak-qihga-cai";

export let tokenCanisterActor: Writable<TokenCanister> = writable();

export const setupActor = (secretKey: ArrayBuffer) => {
    let _identity = identity.Ed25519KeyIdentity.fromSecretKey(secretKey)
    let options: CreateActorOptions = {
        agentOptions: { identity: _identity }
    };
    let actor = createActor(canister,options);
    tokenCanisterActor.set(actor);
}

