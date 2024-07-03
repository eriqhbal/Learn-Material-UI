import { Stack, Avatar, AvatarGroup, Box} from '@mui/material';

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={3}>
        <Avatar sx={{ bgcolor: "primary.light" }} alt="Zuleriqhbal Hendri">
          ZH
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light" }} alt="Widiya Setyaningrum">
          WS
        </Avatar>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <AvatarGroup max={2}>
          <Avatar sx={{ bgcolor: "#102C57" }} alt="Dinda Devira">
            DD
          </Avatar>
          <Avatar sx={{ bgcolor: "success.light" }} alt="Miko Alwin">
            MK
          </Avatar>
          <Avatar sx={{ bgcolor: "primary.light" }} alt="Gibran Rakabuming">
            GR
          </Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Box>
          <Avatar
            variant="square"
            src="https://img.inews.co.id/media/600/files/inews_new/2023/07/28/Lionel_Messi_by_Inter_Miami.jpeg"
            sx={{ width: 80, height: 80 }}
            alt="Lionel Messi"
          />
        </Box>
        <Avatar
          variant="rounded"
          src="https://img.inews.co.id/media/600/files/inews_new/2023/07/28/Lionel_Messi_by_Inter_Miami.jpeg"
          sx={{ width: 80, height: 80 }}
          alt="Lionel Messi"
        />
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;