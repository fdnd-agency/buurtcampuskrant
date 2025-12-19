<div id="progress"></div>

<style>
@supports (animation-timeline: scroll()) {
  #progress {
    width: 100%;
    height: var(--xs);
    background-color: #ddd;
    position: sticky;
    top: 0;
  }

  #progress::after {
    content: "";
    display: block;
    height: 100%;
    background-color: var(--primary-color-general);

    transform-origin: left;
    transform: scaleX(0);

    animation: progress linear forwards;
    animation-timeline: scroll();
  }

  @keyframes progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
}
</style>
