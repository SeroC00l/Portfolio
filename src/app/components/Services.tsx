'use client'

import React from 'react';
import { Code } from "../ico/Code";
import { Api } from "../ico/Api";
import { Android } from "../ico/Android";
import styled from 'styled-components';

const StyledServicesSection = styled.section`
  background-color: rgb(31 41 55) ;
  padding-bottom: 6rem;

  @media (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const StyledServiceCard = styled.div`
  background-color: rgb(55 65 81);
  border: 2px solid #444;
  border-radius: 1.5rem;
  padding: 1.5rem;
  text-align: center;
  flex: 1;
  transition: border-color 0.3s, transform 0.3s;

  &:hover {
    border-color: #00eeff;
    transform: scale(1.05);
  }
`;

export function Services() {
    return (
        <StyledServicesSection id="services">
            <h2 className="md:text-4xl text-4xl text-center  md:mx-0 mb-4 font-bold text-white">
                Our{" "}
                <span className="inline-block text-homeColor font-bold">
                    Services
                </span>
            </h2>
            <div className="flex text-white flex-wrap gap-8 mx-8">
                <StyledServiceCard>
                    <Code />
                    <h3 className="md:mx-0 text-2xl mb-2">Web Development</h3>
                    <p className="md:mx-0 text-left md:text-sm text-xs">
                        I offer web development services that focus on creating innovative
                        and efficient web applications tailored to meet your business
                        needs. With my expertise in React, HTML, CSS, JavaScript, and
                        other web development technologies, I can build intuitive and
                        user-friendly applications that drive business success. Whether
                        you need a new website, an e-commerce platform, or a custom web
                        application, I can provide high-quality and scalable solutions
                        that meet your requirements. Let's work together to bring your
                        ideas to life and create a unique online presence for your
                        business.
                    </p>
                </StyledServiceCard>
                <StyledServiceCard>
                    <Api />
                    <h3 className="md:mx-0 text-2xl mb-2">Backend Development</h3>
                    <p className="md:mx-0 text-left md:text-sm text-xs">
                        I offer backend development services using various technologies,
                        including Node.js and Python. I have experience designing and
                        implementing scalable and secure backend solutions that support a
                        range of web applications, from e-commerce sites to social media
                        platforms. My expertise extends to database management, with
                        proficiency in SQL and MongoDB, and I am committed to delivering
                        robust and efficient backend systems that meet my clients'
                        business needs.
                    </p>
                </StyledServiceCard>
                <StyledServiceCard>
                    <Android />
                    <h3 className="md:mx-0 text-2xl mb-2">Mobile App Development</h3>
                    <p className="md:mx-0 text-left md:text-sm text-xs">
                        I can create innovative and efficient mobile applications using
                        React Native and Flutter, two of the most popular mobile app
                        development frameworks in the market. I have experience developing
                        a range of mobile applications, including social media apps,
                        e-commerce platforms, and healthcare apps. My focus is on creating
                        intuitive and user-friendly interfaces that provide a seamless
                        user experience. I can work with you to develop a custom mobile
                        application that meets your specific needs and exceeds your
                        expectations.
                    </p>
                </StyledServiceCard>
            </div>
        </StyledServicesSection>
    )
}
