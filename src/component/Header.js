import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/fire-alert'

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Icon icon={LocationIcon} />
                World Volcanoes Explosion
                <Icon icon={LocationIcon} />
            </h1>
        </div>
    )
}