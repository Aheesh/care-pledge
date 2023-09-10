import { WagmiConfig, useConnect } from 'wagmi'
import {wagmiConfig} from '../wagmi';

function ConnectPage() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}

        {error && <div>{error.message}</div>}
      </WagmiConfig>
    </div>
  )
}

export default ConnectPage;