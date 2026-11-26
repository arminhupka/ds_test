# The image of the pipeline jobs: Node, git, Claude Code and tmux (the jobs run an interactive Claude session in tmux).
FROM node:22-bookworm-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates curl openssh-client jq perl tmux unzip \
 && rm -rf /var/lib/apt/lists/*

RUN npm install -g @anthropic-ai/claude-code

USER node
ENV HOME=/home/node
WORKDIR /work
