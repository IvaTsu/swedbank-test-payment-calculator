import React from 'react';
// Custom Components
import SocialLink from './SocialLink';
// social icons
import Icons from './../../static/icons';
// social icons paths
const FACEBOOK = Icons.facebook;
const INSTAGRAM = Icons.instagram;
const YOUTUBE = Icons.youtube;
const TWITTER = Icons.twitter;
const SKYPE = Icons.skype;

export default () => (
    <div className="social">
        <SocialLink
            target="_blank"
            href="https://www.facebook.com/SwedbankEestis"
            src={ FACEBOOK }
            alt="Facebook Social Icon"
        />
        <SocialLink
            target="_blank"
            href="https://www.instagram.com/swedbankeestis"
            src={ INSTAGRAM }
            alt="Instagram Social Icon"
        />
        <SocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UCtkFPufr4LOHpSmy399zQIw"
            src={ YOUTUBE }
            alt="YouTube Social Icon"
        />
        <SocialLink
            target="_blank"
            href="https://www.twitter.com"
            src={ TWITTER }
            alt="Twitter Social Icon"
        />
        <SocialLink
            target="_blank"
            href="skype:swedbank.eestis?call"
            src={ SKYPE }
            alt="Skype Social Icon"
        />
    </div>
);