import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from '@mui/material/Stack';

export default function SocialMediaIcons() {
  return (
    <Stack direction="row" justifyContent="center" spacing={3}>
        <a href="https://www.instagram.com/e_commerce_kg/">
          <InstagramIcon style={{fill: "pink"}}/>
        </a>
        <a href="https://tttttt.me/AMAzone_telegram">
          <TelegramIcon style={{fill: "blue"}}/>
        </a>
        <a href="https://www.youtube.com/channel/UCxrshyKUTQDsbKtuXzDLJbg">
          <YouTubeIcon style={{fill: "red"}}/>
        </a>
        <a href="https://wa.me/+996706173317">
          <WhatsAppIcon style={{fill: "green"}}/>
        </a>
    </Stack>
  );
}