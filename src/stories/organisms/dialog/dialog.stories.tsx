import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dialog, { DialogProps } from './dialog';

type Story = StoryObj<DialogProps>;

export const Default: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		const openDialog = () => setIsOpen(true);
		const closeDialog = () => setIsOpen(false);

		return (
			<>
				<button className="button" onClick={openDialog}>
					Open Dialog
				</button>
				<Dialog {...args} isOpen={isOpen} onClose={closeDialog}>
					<main className="dialog__content">
						<p>
							This is a dialog content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							convallis sodales erat vel accumsan. Nam eget massa nec sem vulputate ullamcorper vel quis
							justo. Duis rhoncus tempor tempus. Nulla facilisi. Maecenas nulla ante, lacinia ac
							consectetur non, aliquet sollicitudin libero. Quisque congue odio sodales dui fermentum ac
							laoreet mauris eleifend. Nulla facilisi. Phasellus vel erat a ante pharetra pharetra.
						</p>
					</main>
					<footer className="dialog__footer">You could add a footer in here as well</footer>
				</Dialog>
			</>
		);
	},
};

export default {
	title: 'Organisms/Dialog',
	component: Dialog,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta;
