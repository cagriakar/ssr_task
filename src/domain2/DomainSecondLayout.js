import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListSubheader,
	makeStyles,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: '50ch',
		backgroundColor: theme.palette.background.paper
	},
	inline: {
		display: 'inline'
	}
}));

const DomainSecondLayout = ({ data }) => {
	const classes = useStyles();

	return (
		<Box>
			<Typography variant='h4' component='h1' gutterBottom>
				Website-2
			</Typography>
			<List className={classes.root}>
				<ListSubheader>Message List</ListSubheader>
				{data.map(({ id, avatar, full_name, message }, index) => (
					<>
						<ListItem alignItems='flex-start' key={id}>
							<ListItemAvatar>
								<Avatar alt={full_name} src={avatar} />
							</ListItemAvatar>
							<ListItemText
								primary='Message from customer:'
								secondary={
									<>
										<Typography
											component='span'
											variant='body2'
											className={classes.inline}
											color='textPrimary'
										>
											{full_name}
										</Typography>
										{` — ${message}`}
									</>
								}
							/>
						</ListItem>
						{index + 1 !== data.length && <Divider variant='inset' component='li' />}
					</>
				))}
			</List>
		</Box>
	);
};

export default DomainSecondLayout;
