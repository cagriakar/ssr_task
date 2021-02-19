import {
	Avatar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	Grid,
	makeStyles,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300
	}
}));

const DomainFirstLayout = ({ data }) => {
	const classes = useStyles();

	return (
		<Box>
			<Typography variant='h4' component='h1' gutterBottom align='center'>
				Website-1
			</Typography>
			<Grid container spacing={2} justify='space-evenly' alignItems='center'>
				{data.map(({ id, avatar, full_name, email, message }) => (
					<Grid item key={id}>
						<Card className={classes.root} raised>
							<CardActionArea>
								<CardHeader
									avatar={
										<Avatar
											aria-label={full_name}
											src={avatar}
											alt={full_name}
										/>
									}
									title={full_name}
									subheader={email}
								/>
								<CardContent>
									<Typography gutterBottom variant='subtitle2' component='h2'>
										Message from customer
									</Typography>
									<Typography variant='body2' color='textSecondary' component='p'>
										{message}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size='small' color='primary'>
									Share
								</Button>
								<Button size='small' color='primary'>
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default DomainFirstLayout;
