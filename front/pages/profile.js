import React from "react";
import Layout from "./../components/Layout";
import Head from "next/head";

const Profile = () => {
  const followerList = [
    { nickname: "김만식" },
    { nickname: "김필두" },
    { nickname: "김초석" },
  ];
  const followingList = [
    { nickname: "김만두" },
    { nickname: "김춘필" },
    { nickname: "김제동" },
  ];
  return (
    <>
      <Head>
        <title>내 정보 | Mari SNS</title>
      </Head>
      <Layout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로잉 목록" data={followerList} />
      </Layout>
    </>
  );
};

export default Profile;
