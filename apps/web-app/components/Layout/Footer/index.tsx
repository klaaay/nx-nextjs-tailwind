import React from 'react';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

import FooterLogo from '../../../icon/FooterLogo';
import MailToIcon from '../../../icon/MailToIcon';
import PhoneIcon from '../../../icon/PhoneIcon';

import { footerLink } from '../../assets/footer-data';

const Footer = () => {
  return (
    <div className="page-footer flex justify-center pt-10">
      <div className="w-10/12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex">
            <FooterLogo />
          </div>

          <div className="flex flex-col gap-8">
            <div className="text-xl">Navigation</div>
            <div className="grid md:grid-cols-3 w-full gap-4">
              {footerLink.map((item, index) => {
                return (
                  <a className="flex" key={index}>
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div className="text-xl">Subcribe to receive our latest update</div>
            <div className="flex w-full items-center gap-2">
              <Input placeholder="Your email address" />
              <Button className="w-44">Subcribe</Button>
            </div>
          </div>

          <div className="flex flex-col gap-8 pl-10">
            <div className="text-xl">Contact us</div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <PhoneIcon />
                <div>0378-785-855</div>
              </div>
              <div className="flex gap-2 items-center">
                <MailToIcon />
                <div>support@gosquid.io</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex mt-10 mb-10"
          style={{
            border: '1px solid #3A3841',
          }}
        />
        <div className="flex justify-between">
          <div>©2022 GoSquid. All Rights reserved.</div>
          <div className="flex flex-row gap-4">
            <div>Security</div>
            <div>Legal</div>
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
