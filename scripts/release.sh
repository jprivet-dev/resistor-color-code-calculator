#!/usr/bin/env bash

# Usage:
# $ . scripts/release.sh

# TODO: instead use dynamic value in the footer.component
files="README.adoc package.json package-lock.json src/app/core/footer/footer.component.html"

type gx &>/dev/null &&
	git release "${files}" ||
	printf "ERROR! For running this script, Git Xtended must be installed (see https://github.com/jprivet-dev/git-xtended).\n"
