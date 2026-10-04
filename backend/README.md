# TRACE-X Backend

Backend API for the TRACE-X crypto wallet to VASP identification system.

## Technology

- Node.js
- Express.js
- CORS
- dotenv

## API Endpoints

### Health Check
GET `/api/health`

### Wallet Test
GET `/api/wallet/test?address=<wallet_address>`

### Transaction Analysis
POST `/api/transactions/analyze`

Request body:

```json
{
  "walletAddress": "0xABC123",
  "transactions": [
    {
      "hash": "0x123"
    }
  ]
}