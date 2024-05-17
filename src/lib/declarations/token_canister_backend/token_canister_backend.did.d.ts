import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AllowanceRequest {
  'id' : bigint,
  'to' : string,
  'from' : string,
  'amount' : bigint,
}
export interface ApproveRequest {
  'id' : bigint,
  'to' : string,
  'amount' : bigint,
}
export interface BalanceRequest { 'id' : bigint, 'owner' : string }
export interface Liquidy {
  'id' : bigint,
  'owner' : string,
  'createdAt' : Time,
  'share' : bigint,
}
export interface MintRequest { 'id' : bigint, 'to' : string, 'amount' : bigint }
export interface PoolInfo {
  'id' : bigint,
  'createdAt' : Time,
  'pair' : [bigint, bigint],
  'precision' : bigint,
  'swaps' : bigint,
  'totalShares' : bigint,
}
export type Time = bigint;
export interface TokenCanister {
  'add' : ActorMethod<[bigint, [bigint, bigint]], TokenResult>,
  'allowance' : ActorMethod<[AllowanceRequest], bigint>,
  'approve' : ActorMethod<[ApproveRequest], TokenResult>,
  'balance' : ActorMethod<[BalanceRequest], bigint>,
  'createPools' : ActorMethod<[Array<[bigint, bigint]>], Array<TokenResult>>,
  'createTokens' : ActorMethod<
    [TokenRequest, Array<MintRequest>],
    Array<TokenResult>
  >,
  'fetchHolders' : ActorMethod<
    [bigint, bigint, bigint],
    Array<[string, bigint]>
  >,
  'fetchPools' : ActorMethod<[], Array<PoolInfo>>,
  'fetchTokens' : ActorMethod<[], Array<TokenInfo>>,
  'fetchTransactions' : ActorMethod<
    [bigint, bigint, bigint],
    Array<TransactionType>
  >,
  'getCycles' : ActorMethod<[], bigint>,
  'getEquivalentTokenAEstimate' : ActorMethod<[bigint, bigint], bigint>,
  'getEquivalentTokenBEstimate' : ActorMethod<[bigint, bigint], bigint>,
  'getHeapSize' : ActorMethod<[], bigint>,
  'getMemorySize' : ActorMethod<[], bigint>,
  'getShares' : ActorMethod<[bigint, string], bigint>,
  'getSwapTokenAEstimate' : ActorMethod<[bigint, bigint], bigint>,
  'getSwapTokenAEstimateGivenTokenB' : ActorMethod<[bigint, bigint], bigint>,
  'getSwapTokenBEstimate' : ActorMethod<[bigint, bigint], bigint>,
  'getSwapTokenBEstimateGivenTokenA' : ActorMethod<[bigint, bigint], bigint>,
  'getTransaction' : ActorMethod<[bigint, bigint], [] | [TransactionType]>,
  'getWithdrawEstimate' : ActorMethod<
    [bigint, bigint],
    { 'shareA' : bigint, 'shareB' : bigint }
  >,
  'lock' : ActorMethod<[bigint], TokenResult>,
  'mint' : ActorMethod<[Array<MintRequest>], Array<TokenResult>>,
  'poolInfo' : ActorMethod<[bigint], [] | [PoolInfo]>,
  'price' : ActorMethod<[bigint], bigint>,
  'remove' : ActorMethod<[bigint, bigint], TokenResult>,
  'swapTokenA' : ActorMethod<[bigint, bigint, bigint], TokenResult>,
  'swapTokenB' : ActorMethod<[bigint, bigint, bigint], TokenResult>,
  'tokenInfo' : ActorMethod<[bigint], [] | [TokenInfo]>,
  'transfer' : ActorMethod<[TransferRequest], TokenResult>,
  'transferFrom' : ActorMethod<
    [Array<TransferFromRequest>],
    Array<TokenResult>
  >,
}
export type TokenError = {
    'GenericError' : { 'message' : string, 'error_code' : bigint }
  } |
  { 'InsufficientAllowance' : { 'balance' : bigint } } |
  { 'Unauthorized' : null } |
  { 'Slippage' : bigint } |
  { 'InsufficientFunds' : { 'balance' : bigint } };
export interface TokenInfo {
  'decimals' : bigint,
  'icon' : string,
  'name' : string,
  'createdAt' : Time,
  'minter' : string,
  'supply' : bigint,
  'holders' : bigint,
  'transactions' : bigint,
  'symbol' : string,
}
export interface TokenRequest {
  'decimals' : bigint,
  'tribute' : string,
  'icon' : string,
  'name' : string,
  'minter' : string,
  'symbol' : string,
}
export type TokenResult = { 'Ok' : bigint } |
  { 'Err' : TokenError };
export interface Transaction {
  'id' : bigint,
  'to' : string,
  'from' : string,
  'createdAt' : Time,
  'amount' : bigint,
}
export type TransactionType = { 'Add' : Liquidy } |
  { 'Approve' : Transaction } |
  { 'Burn' : Transaction } |
  { 'Lock' : Transaction } |
  { 'Mint' : Transaction } |
  { 'Swap' : Liquidy } |
  { 'Remove' : Liquidy } |
  { 'Transfer' : Transaction } |
  { 'TransferFrom' : Transaction };
export interface TransferFromRequest {
  'id' : bigint,
  'to' : string,
  'from' : string,
  'amount' : bigint,
}
export interface TransferRequest {
  'id' : bigint,
  'to' : string,
  'amount' : bigint,
}
export interface _SERVICE extends TokenCanister {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
