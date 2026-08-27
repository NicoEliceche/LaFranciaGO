import styled, { keyframes } from 'styled-components';

// ── Chat del mandado ──

const pulse = keyframes`
  0% { transform: scale(0.85); opacity: 0.9; }
  70% { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
`;

export const ChatStatusBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
`;

export const ChatStatusDot = styled.span`
  width: 0.6rem;
  height: 0.6rem;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.warning};

  &[data-status='tomado'],
  &[data-status='en-curso'] {
    background: ${({ theme }) => theme.color.success};
  }

  &[data-status='cancelado'] {
    background: ${({ theme }) => theme.color.danger};
  }
`;

export const ChatStatusText = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const ChatDescription = styled.p`
  margin: ${({ theme }) => theme.spacing[2]} 0;
  padding: ${({ theme }) => theme.spacing[2]};
  border-left: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 0 ${({ theme }) => theme.radius.md} ${({ theme }) => theme.radius.md} 0;
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.45;
`;

export const SearchingCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px dashed ${({ theme }) => theme.color.borderStrong};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.4;
`;

export const SearchingPulse = styled.span`
  position: relative;
  flex: 0 0 auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.primary};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.primary};
    animation: ${pulse} 1.8s ease-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

export const CourierCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`;

export const CourierAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const CourierName = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
`;

export const CourierMeta = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const ChatFeed = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  align-content: start;
  min-height: 14rem;
  max-height: 52dvh;
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.backgroundAlt};
  overflow-y: auto;
  overscroll-behavior: contain;
`;

export const ChatRow = styled.div`
  display: flex;
  justify-content: flex-start;

  &[data-mine='true'] {
    justify-content: flex-end;
  }
`;

export const ChatBubble = styled.div`
  max-width: min(80%, 22rem);
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.4;
  word-break: break-word;

  &[data-mine='true'] {
    border-color: transparent;
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }
`;

export const ChatMeta = styled.span`
  display: block;
  margin-top: 0.2rem;
  opacity: 0.7;
  font-size: 0.6875rem;
  text-align: right;
`;

export const ChatPhoto = styled.img`
  display: block;
  width: 100%;
  max-width: 15rem;
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const ChatAudio = styled.audio`
  display: block;
  width: 100%;
  min-width: 12rem;
  max-width: 15rem;
`;

export const ChatComposer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const ChatComposerInput = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const ChatIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.primarySoft};
  }

  &[data-tone='danger'] {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const ChatSendButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, opacity 180ms ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brandHover};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const RecordingBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.danger};
  background: ${({ theme }) => theme.color.surface};
`;

export const RecordingTime = styled.span`
  flex: 1 1 auto;
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-align: center;
`;
