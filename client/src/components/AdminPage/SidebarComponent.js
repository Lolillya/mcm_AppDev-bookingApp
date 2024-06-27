import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBellConcierge,
    faCalendarDays,
    faClipboard,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import MCMLogo from "../../img/MMCM_Logo.svg";

const Sidebar = styled.section`
    width: 10vw;
    height: 100vh;
    background-color: #fafafa;
    color: black;
    box-shadow: 5px 0px 12px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 5px 0px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 0px 12px 0px rgba(0, 0, 0, 0.75);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SidebarContainer = styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SidebarImgContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const SidebarMainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50vh;
    width: 100%;
    margin-top: 20px;
`;

const UnorderedList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    list-style-type: none;
    gap: 12px;
    width: 100%;
`;

const List = styled.li`
    font-size: large;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px;
    color: ${({ active }) => (active ? "#FAFAFA" : "black")};
    background-color: ${({ active }) => (active ? "#AB0F11" : "transparent")};
    width: 100%;
    height: 50px;
    justify-content: center;

    &:hover {
        background-color: #ab0f11;
        color: white;
    }
`;

const IconLabel = styled.span`
    margin-left: 8px;
`;

const LogoutButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;

const LogoutButton = styled.button`
    font-size: large;
    font-weight: 500;
    width: 100%;
    height: 50px;
    padding: 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #ab0f11;
        color: white;
    }
`;

const SidebarComponent = ({
    openLogs,
    openCalendar,
    openRequests,
    activeItem,
}) => {
    return (
        <Sidebar>
            <SidebarContainer>
                <SidebarImgContainer>
                    <img
                        src={MCMLogo}
                        style={{ width: "150px", height: "auto" }}
                        alt="MMCM Logo"
                    />
                </SidebarImgContainer>
                <SidebarMainContent>
                    <UnorderedList>
                        <List
                            onClick={openRequests}
                            active={activeItem === "requests"}
                        >
                            <FontAwesomeIcon icon={faBellConcierge} />
                            <IconLabel>Requests</IconLabel>
                        </List>
                        <List
                            onClick={openCalendar}
                            active={activeItem === "calendar"}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <IconLabel>Calendar</IconLabel>
                        </List>
                        <List
                            onClick={openLogs}
                            active={activeItem === "logs"}
                        >
                            <FontAwesomeIcon icon={faClipboard} />
                            <IconLabel>Logs</IconLabel>
                        </List>
                    </UnorderedList>
                </SidebarMainContent>
            </SidebarContainer>
            <LogoutButtonContainer>
                <LogoutButton>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
                    <IconLabel>Logout</IconLabel>
                </LogoutButton>
            </LogoutButtonContainer>
        </Sidebar>
    );
};

export default SidebarComponent;
