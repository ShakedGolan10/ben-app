'use client'
import { Loading } from "@nextui-org/react";
import dynamic from "next/dynamic";
import LoadingElement from "../loading-element";

export const AppPageDynamic = dynamic(() => import("../dynamic_cmps/app_page"), {
		ssr: false,
		loading: function LoadingComponent() {
			return <LoadingElement msg={'טוען...'} />;
		},
	});
export const BlogLayoutDynamic = dynamic(() => import("../dynamic_cmps/blog_layout"), {
		ssr: false,
		loading: function LoadingComponent() {
			return <LoadingElement msg={'טוען...'} />;
		},
	});
export const MemoriesLayoutDynamic = dynamic(() => import("../dynamic_cmps/memories_layout"), {
		ssr: false,
		loading: function LoadingComponent() {
			return <LoadingElement msg={'טוען...'} />;
		},
	});
export const MyStoryLayoutDynamic = dynamic(() => import("../dynamic_cmps/my_story_layout"), {
		ssr: false,
		loading: function LoadingComponent() {
			return <LoadingElement msg={'טוען...'} />;
		},
	});
export const VolunteerLayoutDynamic = dynamic(() => import("../dynamic_cmps/volunteer_layout"), {
		ssr: false,
		loading: function LoadingComponent() {
			return <LoadingElement msg={'טוען...'} />;
		},
	});
