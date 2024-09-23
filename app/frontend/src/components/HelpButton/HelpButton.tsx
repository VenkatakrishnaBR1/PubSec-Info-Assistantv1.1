// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Text } from "@fluentui/react";
import { ChatHelp24Regular, Info24Regular } from "@fluentui/react-icons";
import styles from "./HelpButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const HelpButton = ({ className, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
            <ChatHelp24Regular />
            <Text className="text-white">{"Help"}</Text>
        </div>
    );
};
