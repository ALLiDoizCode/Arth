export const idlFactory = ({ IDL }) => {
  const TokenError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'InsufficientAllowance' : IDL.Record({ 'balance' : IDL.Nat }),
    'Unauthorized' : IDL.Null,
    'Slippage' : IDL.Nat,
    'InsufficientFunds' : IDL.Record({ 'balance' : IDL.Nat }),
  });
  const TokenResult = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : TokenError });
  const AllowanceRequest = IDL.Record({
    'id' : IDL.Nat,
    'to' : IDL.Text,
    'from' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const ApproveRequest = IDL.Record({
    'id' : IDL.Nat,
    'to' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const BalanceRequest = IDL.Record({ 'id' : IDL.Nat, 'owner' : IDL.Text });
  const TokenRequest = IDL.Record({
    'decimals' : IDL.Nat,
    'tribute' : IDL.Text,
    'icon' : IDL.Text,
    'name' : IDL.Text,
    'minter' : IDL.Text,
    'symbol' : IDL.Text,
  });
  const MintRequest = IDL.Record({
    'id' : IDL.Nat,
    'to' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const Time = IDL.Int;
  const PoolInfo = IDL.Record({
    'id' : IDL.Nat,
    'createdAt' : Time,
    'pair' : IDL.Tuple(IDL.Nat, IDL.Nat),
    'precision' : IDL.Nat,
    'swaps' : IDL.Nat,
    'totalShares' : IDL.Nat,
  });
  const TokenInfo = IDL.Record({
    'decimals' : IDL.Nat,
    'icon' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : Time,
    'minter' : IDL.Text,
    'supply' : IDL.Nat,
    'holders' : IDL.Nat,
    'transactions' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  const Liquidy = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'createdAt' : Time,
    'share' : IDL.Nat,
  });
  const Transaction = IDL.Record({
    'id' : IDL.Nat,
    'to' : IDL.Text,
    'from' : IDL.Text,
    'createdAt' : Time,
    'amount' : IDL.Nat,
  });
  const TransactionType = IDL.Variant({
    'Add' : Liquidy,
    'Approve' : Transaction,
    'Burn' : Transaction,
    'Lock' : Transaction,
    'Mint' : Transaction,
    'Swap' : Liquidy,
    'Remove' : Liquidy,
    'Transfer' : Transaction,
    'TransferFrom' : Transaction,
  });
  const TransferRequest = IDL.Record({
    'id' : IDL.Nat,
    'to' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const TransferFromRequest = IDL.Record({
    'id' : IDL.Nat,
    'to' : IDL.Text,
    'from' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const TokenCanister = IDL.Service({
    'add' : IDL.Func([IDL.Nat, IDL.Tuple(IDL.Nat, IDL.Nat)], [TokenResult], []),
    'allowance' : IDL.Func([AllowanceRequest], [IDL.Nat], ['query']),
    'approve' : IDL.Func([ApproveRequest], [TokenResult], []),
    'balance' : IDL.Func([BalanceRequest], [IDL.Nat], ['query']),
    'createPools' : IDL.Func(
        [IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Nat))],
        [IDL.Vec(TokenResult)],
        [],
      ),
    'createTokens' : IDL.Func(
        [TokenRequest, IDL.Vec(MintRequest)],
        [IDL.Vec(TokenResult)],
        [],
      ),
    'fetchHolders' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
        ['query'],
      ),
    'fetchPools' : IDL.Func([], [IDL.Vec(PoolInfo)], ['query']),
    'fetchTokens' : IDL.Func([], [IDL.Vec(TokenInfo)], ['query']),
    'fetchTransactions' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(TransactionType)],
        ['query'],
      ),
    'getCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'getEquivalentTokenAEstimate' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'getEquivalentTokenBEstimate' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'getHeapSize' : IDL.Func([], [IDL.Nat], ['query']),
    'getMemorySize' : IDL.Func([], [IDL.Nat], ['query']),
    'getShares' : IDL.Func([IDL.Nat, IDL.Text], [IDL.Nat], ['query']),
    'getSwapTokenAEstimate' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'getSwapTokenAEstimateGivenTokenB' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Nat],
        [],
      ),
    'getSwapTokenBEstimate' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'getSwapTokenBEstimateGivenTokenA' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Nat],
        [],
      ),
    'getTransaction' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Opt(TransactionType)],
        ['query'],
      ),
    'getWithdrawEstimate' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Record({ 'shareA' : IDL.Nat, 'shareB' : IDL.Nat })],
        [],
      ),
    'lock' : IDL.Func([IDL.Nat], [TokenResult], []),
    'mint' : IDL.Func([IDL.Vec(MintRequest)], [IDL.Vec(TokenResult)], []),
    'poolInfo' : IDL.Func([IDL.Nat], [IDL.Opt(PoolInfo)], ['query']),
    'price' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'remove' : IDL.Func([IDL.Nat, IDL.Nat], [TokenResult], []),
    'swapTokenA' : IDL.Func([IDL.Nat, IDL.Nat, IDL.Nat], [TokenResult], []),
    'swapTokenB' : IDL.Func([IDL.Nat, IDL.Nat, IDL.Nat], [TokenResult], []),
    'tokenInfo' : IDL.Func([IDL.Nat], [IDL.Opt(TokenInfo)], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TokenResult], []),
    'transferFrom' : IDL.Func(
        [IDL.Vec(TransferFromRequest)],
        [IDL.Vec(TokenResult)],
        [],
      ),
  });
  return TokenCanister;
};
export const init = ({ IDL }) => { return []; };
