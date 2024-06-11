import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropDownButton, Flex } from 'rendition';
import { SVGIcon } from '../svg-icon/svg-icon';
import ImageSvg from '../../../assets/etcher.svg';

interface ImageSelectorDropdownProps {
	disabled: boolean;
	platformsList: string[];
	onSelect: (selectedOption: string) => void;
}

export class ImageSelectorDropdown extends React.PureComponent<ImageSelectorDropdownProps> {

	constructor(props: ImageSelectorDropdownProps) {
		super(props);
		this.state = {
			disabled: Boolean,
		};
	}

	handleSelect = (image: string) => {
		this.props.onSelect(image);
	}

	public render() {
		const { platformsList } = this.props;

		return (
			<Flex
				flexDirection="column"
				alignItems="center"

			>
				<SVGIcon
						contents='../../../assets/flash.svg'
						fallback={ImageSvg}
						style={{
							marginBottom: 30,
						}}
					/>
				
				<DropDownButton id='dropdownbutton-imgselector' primary={true} border={true} label="Choose Platform" joined={true} alignRight={true}>
				{platformsList.map((platform, index) => (
								<Dropdown.Item key={index} onClick={() => this.handleSelect(platform)}>
									{platform}
								</Dropdown.Item>
							))
							
						}
				</DropDownButton>
			</Flex>
		);
	}
}