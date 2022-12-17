/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from 'react-router-dom'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Footer from '../footer/Footer'

const pages = ['inicio', 'acerca', 'contacto']
const settings = ['Github ', 'Twitter', 'Linkedin']
const socialLinks = [
  'https://github.com/michaelsd28',
  'https://twitter.com/home',
  'https://www.linkedin.com/in/michael-santana-47bb87219/',
]

const Layout = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <AppBar
        style={{
          background: 'linear-gradient(135deg, #344280 0%, #3d2555 100%)',
          minWidth: '100vw',
          zIndex: 10,
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                style={{ position: 'relative', left: -20 }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={page}
                  >
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'sans-serif',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to="inicio"
              >
                <img
                  style={{
                    width: 35,
                    margin: '0 10px 0 0',
                    background: '#a2a8fb',
                    borderRadius: 3,
                    padding: 5,
                  }}
                  className="img-fluid"
                  src={`${process.env.PUBLIC_URL}/assets/home/codingIcon.png`}
                  alt="logo"
                />
                Mi portafolio
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to={page}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Lenguajes">
                <IconButton
                  style={{ position: 'relative', margin: '0 0 0 15px' }}
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <img
                    style={{ width: 35 }}
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/assets/home/perfilIcon.png`}
                    alt="logo"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      window.open(socialLinks[index], '_blank')
                      handleCloseUserMenu()
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Layout
