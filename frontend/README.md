# Momo Magic Frontend

This is the unified frontend application for Momo Magic, containing both Client and Admin interfaces.

## Structure

- src/pages/client: Customer-facing pages.
- src/pages/admin: Admin dashboard pages.
- src/components/client: Components specific to the client app.
- src/components/admin: Components specific to the admin app.
- src/components/ui: Shared UI components (Shadcn UI).
- src/layouts: Layout components (ClientLayout, AdminLayout).

## Routing

- /: Client Home
- /menu: Client Menu
- /mycart: Client Cart
- /myorder: Client Orders
- /admin: Admin Dashboard (Analytics)
- /admin/orders: Admin Orders
- ...and other admin routes.

## Development

1. Install dependencies:
   npm install

2. Run the development server:
   npm run dev
