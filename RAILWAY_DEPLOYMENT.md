# Railway Deployment Guide

## Prerequisites

- GitHub account
- Railway account (sign up at [railway.app](https://railway.app))

## Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

### 2. Deploy on Railway

#### Option A: Using Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

#### Option B: Using Railway Dashboard

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `karim-port` repository
5. Railway will automatically detect Next.js and deploy

### 3. Environment Variables (Optional)

If you need to add environment variables:

1. Go to your project dashboard on Railway
2. Click on "Variables" tab
3. Add any required environment variables from `.env.example`

### 4. Custom Domain (Optional)

1. In Railway dashboard, go to "Settings"
2. Click "Generate Domain" for a railway.app subdomain
3. Or add your custom domain under "Custom Domains"

## Build Configuration

Railway will automatically:

- Detect Next.js project
- Install dependencies with `npm ci`
- Build with `npm run build`
- Start server with `npm start`
- Use Node.js 20.x

Configuration files:

- `railway.json` - Railway-specific settings
- `nixpacks.toml` - Build provider configuration
- `package.json` - Node.js version constraints

## Troubleshooting

### Build fails

- Check Railway build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Runtime errors

- Check Railway logs: `railway logs`
- Verify environment variables are set correctly
- Ensure production build works locally: `npm run build && npm start`

### Port issues

Railway automatically assigns PORT environment variable - Next.js handles this by default.

## Local Testing

Test production build locally before deploying:

```bash
npm run build
npm start
```

Visit http://localhost:3000

## Monitoring

- View logs: Railway Dashboard > Your Project > Deployments
- Check metrics: Railway Dashboard > Your Project > Metrics
- Set up alerts in Railway dashboard settings

## Cost

- Railway offers a free tier with:
  - $5 free credit/month
  - 500 hours of usage
  - Automatic sleep after inactivity
- Upgrade to Pro if you need more resources

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Railway GitHub: https://github.com/railwayapp/nixpacks
