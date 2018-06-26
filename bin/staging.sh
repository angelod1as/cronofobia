#!/usr/bin/env bash

printf '\n\e[1;33m%-6s\e[m\n' "┌-----------------------------------┐"
printf '\e[1;33m%-6s\e[m\n' "|                                   |"
printf '\e[1;33m%-6s\e[m\n' "|          Versão Staging           |"
printf '\e[1;33m%-6s\e[m\n' "|                                   |"
printf '\e[1;33m%-6s\e[m\n\n' "└-----------------------------------┘"

printf '\n\e[5;33m%-6s\e[m\n' "-------------------------------------"
printf '\e[5;33m%-6s\e[m' "          Gerando arquivos           "
printf '\n\e[5;33m%-6s\e[m\n\n' "-------------------------------------"

yarn build

printf '\n\e[5;33m%-6s\e[m\n' "-------------------------------------"
printf '\e[5;33m%-6s\e[m' "          Copiando projeto           "
printf '\n\e[5;33m%-6s\e[m\n\n' "-------------------------------------"

osascript -e 'tell app "Finder" to open location "smb://ralencar@fsclu2fs.grupofolha.intranet/staging"'
mkdir -p /Volumes/staging/arte.folha.com.br/esporte/copa-2018/numerada/
cp -r build/* /Volumes/staging/arte.folha.com.br/esporte/copa-2018/numerada/


printf '\n\e[5;33m%-6s\e[m\n' "Url:"
printf '\e[1;33m%-6s\e[m\n\n' "http://staging.arte.folha.com.br/esporte/copa-2018/numerada/"
