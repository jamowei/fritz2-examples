(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['fritz2-examples-remote'] = factory(typeof this['fritz2-examples-remote'] === 'undefined' ? {} : this['fritz2-examples-remote']);
}(this, function (_) {
  'use strict';
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__10.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__10.prototype.constructor = _no_name_provided__10;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  _no_name_provided__1_0.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__1_0.prototype.constructor = _no_name_provided__1_0;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  RemoveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveOnCancel.prototype.constructor = RemoveOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_1.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_1.prototype.constructor = Key_1;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList_0.prototype = Object.create(LinkedListHead.prototype);
  NodeList_0.prototype.constructor = NodeList_0;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveElement.prototype = Object.create(Receive.prototype);
  ReceiveElement.prototype.constructor = ReceiveElement;
  ReceiveElementWithUndeliveredHandler.prototype = Object.create(ReceiveElement.prototype);
  ReceiveElementWithUndeliveredHandler.prototype.constructor = ReceiveElementWithUndeliveredHandler;
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ChannelCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ChannelCoroutine.prototype.constructor = ChannelCoroutine;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  ProducerCoroutine.prototype = Object.create(ChannelCoroutine.prototype);
  ProducerCoroutine.prototype.constructor = ProducerCoroutine;
  $awaitCloseCOROUTINE$1.prototype = Object.create(CoroutineImpl_0.prototype);
  $awaitCloseCOROUTINE$1.prototype.constructor = $awaitCloseCOROUTINE$1;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  $collectToCOROUTINE$2.prototype = Object.create(CoroutineImpl_0.prototype);
  $collectToCOROUTINE$2.prototype.constructor = $collectToCOROUTINE$2;
  ChannelFlowBuilder.prototype = Object.create(ChannelFlow.prototype);
  ChannelFlowBuilder.prototype.constructor = ChannelFlowBuilder;
  CallbackFlowBuilder.prototype = Object.create(ChannelFlowBuilder.prototype);
  CallbackFlowBuilder.prototype.constructor = CallbackFlowBuilder;
  $emitAllImplCOROUTINE$4.prototype = Object.create(CoroutineImpl_0.prototype);
  $emitAllImplCOROUTINE$4.prototype.constructor = $emitAllImplCOROUTINE$4;
  $collectCOROUTINE$6.prototype = Object.create(CoroutineImpl_0.prototype);
  $collectCOROUTINE$6.prototype.constructor = $collectCOROUTINE$6;
  StateFlowImpl.prototype = Object.create(AbstractSharedFlow.prototype);
  StateFlowImpl.prototype.constructor = StateFlowImpl;
  StateFlowSlot.prototype = Object.create(AbstractSharedFlowSlot.prototype);
  StateFlowSlot.prototype.constructor = StateFlowSlot;
  _no_name_provided__36.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__36.prototype.constructor = _no_name_provided__36;
  _no_name_provided__37.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__37.prototype.constructor = _no_name_provided__37;
  $collect_2COROUTINE$14.prototype = Object.create(CoroutineImpl_0.prototype);
  $collect_2COROUTINE$14.prototype.constructor = $collect_2COROUTINE$14;
  $emit_2COROUTINE$15.prototype = Object.create(CoroutineImpl_0.prototype);
  $emit_2COROUTINE$15.prototype.constructor = $emit_2COROUTINE$15;
  $catchImplCOROUTINE$13.prototype = Object.create(CoroutineImpl_0.prototype);
  $catchImplCOROUTINE$13.prototype.constructor = $catchImplCOROUTINE$13;
  $onSubscriptionCOROUTINE$21.prototype = Object.create(CoroutineImpl_0.prototype);
  $onSubscriptionCOROUTINE$21.prototype.constructor = $onSubscriptionCOROUTINE$21;
  $emit_2_8_4COROUTINE$23.prototype = Object.create(CoroutineImpl_0.prototype);
  $emit_2_8_4COROUTINE$23.prototype.constructor = $emit_2_8_4COROUTINE$23;
  $collect_2_2COROUTINE$22.prototype = Object.create(CoroutineImpl_0.prototype);
  $collect_2_2COROUTINE$22.prototype.constructor = $collect_2_2COROUTINE$22;
  $emit_2_9COROUTINE$27.prototype = Object.create(CoroutineImpl_0.prototype);
  $emit_2_9COROUTINE$27.prototype.constructor = $emit_2_9COROUTINE$27;
  $collect_2COROUTINE$26.prototype = Object.create(CoroutineImpl_0.prototype);
  $collect_2COROUTINE$26.prototype.constructor = $collect_2COROUTINE$26;
  _no_name_provided__39.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__39.prototype.constructor = _no_name_provided__39;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  ScopeCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ScopeCoroutine.prototype.constructor = ScopeCoroutine;
  LockedQueue.prototype = Object.create(LinkedListHead.prototype);
  LockedQueue.prototype.constructor = LockedQueue;
  LockWaiter.prototype = Object.create(LinkedListNode.prototype);
  LockWaiter.prototype.constructor = LockWaiter;
  LockCont.prototype = Object.create(LockWaiter.prototype);
  LockCont.prototype.constructor = LockCont;
  UnlockOp.prototype = Object.create(AtomicOp.prototype);
  UnlockOp.prototype.constructor = UnlockOp;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  LensException.prototype = Object.create(Exception.prototype);
  LensException.prototype.constructor = LensException;
  $collect_2_2_2COROUTINE$1.prototype = Object.create(CoroutineImpl_0.prototype);
  $collect_2_2_2COROUTINE$1.prototype.constructor = $collect_2_2_2COROUTINE$1;
  _no_name_provided__49.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__49.prototype.constructor = _no_name_provided__49;
  _no_name_provided__50.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__50.prototype.constructor = _no_name_provided__50;
  _no_name_provided__51.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__51.prototype.constructor = _no_name_provided__51;
  _no_name_provided__52.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__52.prototype.constructor = _no_name_provided__52;
  $enqueueCOROUTINE$3.prototype = Object.create(CoroutineImpl_0.prototype);
  $enqueueCOROUTINE$3.prototype.constructor = $enqueueCOROUTINE$3;
  _no_name_provided__53.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__53.prototype.constructor = _no_name_provided__53;
  _no_name_provided__54.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__54.prototype.constructor = _no_name_provided__54;
  _no_name_provided__55.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__55.prototype.constructor = _no_name_provided__55;
  _no_name_provided__56.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__56.prototype.constructor = _no_name_provided__56;
  _no_name_provided__63.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__63.prototype.constructor = _no_name_provided__63;
  Div.prototype = Object.create(Tag.prototype);
  Div.prototype.constructor = Div;
  Label.prototype = Object.create(Tag.prototype);
  Label.prototype.constructor = Label;
  Input.prototype = Object.create(Tag.prototype);
  Input.prototype.constructor = Input;
  Hr.prototype = Object.create(Tag.prototype);
  Hr.prototype.constructor = Hr;
  Button.prototype = Object.create(Tag.prototype);
  Button.prototype.constructor = Button;
  H.prototype = Object.create(Tag.prototype);
  H.prototype.constructor = H;
  Pre.prototype = Object.create(Tag.prototype);
  Pre.prototype.constructor = Pre;
  TextElement.prototype = Object.create(Tag.prototype);
  TextElement.prototype.constructor = TextElement;
  MountTargetNotFoundException.prototype = Object.create(Exception.prototype);
  MountTargetNotFoundException.prototype.constructor = MountTargetNotFoundException;
  DomListener.prototype = Object.create(Listener.prototype);
  DomListener.prototype.constructor = DomListener;
  $collect_2_2_2COROUTINE$16.prototype = Object.create(CoroutineImpl_0.prototype);
  $collect_2_2_2COROUTINE$16.prototype.constructor = $collect_2_2_2COROUTINE$16;
  _no_name_provided__64.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__64.prototype.constructor = _no_name_provided__64;
  $collect_2_2_2COROUTINE$31.prototype = Object.create(CoroutineImpl_0.prototype);
  $collect_2_2_2COROUTINE$31.prototype.constructor = $collect_2_2_2COROUTINE$31;
  $executeCOROUTINE$33.prototype = Object.create(CoroutineImpl_0.prototype);
  $executeCOROUTINE$33.prototype.constructor = $executeCOROUTINE$33;
  $buildInitCOROUTINE$34.prototype = Object.create(CoroutineImpl_0.prototype);
  $buildInitCOROUTINE$34.prototype.constructor = $buildInitCOROUTINE$34;
  $getCOROUTINE$35.prototype = Object.create(CoroutineImpl_0.prototype);
  $getCOROUTINE$35.prototype.constructor = $getCOROUTINE$35;
  $postCOROUTINE$40.prototype = Object.create(CoroutineImpl_0.prototype);
  $postCOROUTINE$40.prototype.constructor = $postCOROUTINE$40;
  FetchException.prototype = Object.create(Exception.prototype);
  FetchException.prototype.constructor = FetchException;
  _no_name_provided__65.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__65.prototype.constructor = _no_name_provided__65;
  _no_name_provided__66.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__66.prototype.constructor = _no_name_provided__66;
  _no_name_provided__67.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__67.prototype.constructor = _no_name_provided__67;
  _no_name_provided__68.prototype = Object.create(RootStore.prototype);
  _no_name_provided__68.prototype.constructor = _no_name_provided__68;
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this_.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_3(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function contains_0(_this_, element) {
    return indexOf_0(_this_, element) >= 0;
  }
  function indexOf_0(_this_, element) {
    var inductionVariable = 0;
    var last = _this_.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element.equals(_this_[index])) {
          return index;
        }}
       while (inductionVariable <= last);
    return -1;
  }
  function minOrNull(_this_) {
    var iterator = _this_.iterator_32();
    if (!iterator.hasNext_10())
      return null;
    var min = iterator.next_10();
    while (iterator.hasNext_10()) {
      var e = iterator.next_10();
      if (compareTo(min, e) > 0)
        min = e;
    }
    return min;
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_3(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_32();
    $l$break: while (tmp0_iterator.hasNext_10()) {
      var element = tmp0_iterator.next_10();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function single(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_0(_this_);
    else {
      {
        var iterator = _this_.iterator_32();
        if (!iterator.hasNext_10())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_1 = iterator.next_10();
        if (iterator.hasNext_10())
          throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
        return single_1;
      }
    }
  }
  function single_0(_this_) {
    var tmp0_subject = _this_._get_size__22();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_51(0);
        break;
      default:throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE)
      return Companion_getInstance_4()._EMPTY;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_3().fromClosedRange(_this_, to_0, -1);
  }
  function toList(_this_) {
    return optimizeReadOnlyList(toMutableList(_this_));
  }
  function map(_this_, transform) {
    return new TransformingSequence(_this_, transform);
  }
  function toMutableList(_this_) {
    return toCollection(_this_, ArrayList_init_$Create$());
  }
  function toCollection(_this_, destination) {
    var tmp0_iterator = _this_.iterator_32();
    while (tmp0_iterator.hasNext_10()) {
      var item = tmp0_iterator.next_10();
      destination.add_16(item);
      Unit_getInstance();
    }
    return destination;
  }
  function drop(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$(toString_1(message_2));
    }var tmp1_substring_0 = coerceAtMost(n, _this_.length);
    return _this_.substring(tmp1_substring_0);
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_0 = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_166 = function (p1) {
    return this.invoke_0((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_16 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_23();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_32();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (equals_0(element_2, element)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_15 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_23();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_32();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!this.contains_16(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_23 = function () {
    return this._get_size__22() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_0(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size_0) {
    if (index < 0 ? true : index >= size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size_0) {
    if (index < 0 ? true : index > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkRangeIndexes = function (fromIndex, toIndex, size_0) {
    if (fromIndex < 0 ? true : toIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size_0);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_32();
    while (tmp0_iterator.hasNext_10()) {
      var e = tmp0_iterator.next_10();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__22() === other._get_size__22()))
      return false;
    var otherIterator = other.iterator_32();
    var tmp0_iterator = c.iterator_32();
    while (tmp0_iterator.hasNext_10()) {
      var elem = tmp0_iterator.next_10();
      var elemOther = otherIterator.next_10();
      if (!equals_0(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__4();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_32();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (equals_0(element_2._get_key__24(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode = function (e) {
    var tmp2_safe_receiver_4 = e._get_key__24();
    var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
    var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
    var tmp0_safe_receiver_6 = e._get_value__7();
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
    return tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
  };
  Companion_1.prototype.entryToString = function (e) {
    return '' + e._get_key__24() + '=' + e._get_value__7();
  };
  Companion_1.prototype.entryEquals = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_0(e._get_key__24(), other._get_key__24()) ? equals_0(e._get_value__7(), other._get_value__7()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__0(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_2 = function (it) {
    return this._this$0_0.toString_0(it);
  };
  _no_name_provided__0.prototype.invoke_166 = function (p1) {
    return this.invoke_2((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_5 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_5 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__24();
    var value = entry._get_value__7();
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_20(key);
    if (!equals_0(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_5(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__22() === other._get_size__22()))
      return false;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__4();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_23();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_32();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!this.containsEntry_5(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_20 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__7();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__4());
  };
  AbstractMap.prototype.isEmpty_23 = function () {
    return this._get_size__22() === 0;
  };
  AbstractMap.prototype._get_size__22 = function () {
    return this._get_entries__4()._get_size__22();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__4();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_0 = function (entry) {
    return toString(this, entry._get_key__24()) + '=' + toString(this, entry._get_value__7());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_2(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_32();
    while (tmp0_iterator.hasNext_10()) {
      var element = tmp0_iterator.next_10();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals = function (c, other) {
    if (!(c._get_size__22() === other._get_size__22()))
      return false;
    return c.containsAll_15(other);
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function _get_lastIndex_(_this_) {
    return _this_._get_size__22() - 1 | 0;
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__22();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this_.get_51(0));
      default:return _this_;
    }
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_23();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__22 = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_23 = function () {
    return true;
  };
  EmptyList.prototype.contains_1 = function (element) {
    return false;
  };
  EmptyList.prototype.contains_16 = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_1(tmp);
  };
  EmptyList.prototype.containsAll_4 = function (elements) {
    return elements.isEmpty_23();
  };
  EmptyList.prototype.containsAll_15 = function (elements) {
    return this.containsAll_4(elements);
  };
  EmptyList.prototype.get_51 = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_32 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_10 = function () {
    return false;
  };
  EmptyIterator.prototype.next_10 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function ArrayAsCollection(values_0, isVarargs) {
    this._values = values_0;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__22 = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_23 = function () {
    var tmp0_isEmpty_0 = this._values;
    return tmp0_isEmpty_0.length === 0;
  };
  ArrayAsCollection.prototype.contains_3 = function (element) {
    return contains(this._values, element);
  };
  ArrayAsCollection.prototype.containsAll_2 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_23();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_32();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!this.contains_3(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_15 = function (elements) {
    return this.containsAll_2(elements);
  };
  ArrayAsCollection.prototype.iterator_32 = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function mutableListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__22();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map_0) ? tmp : THROW_CCE();
  }
  function plus(_this_, pair) {
    var tmp;
    if (_this_.isEmpty_23()) {
      tmp = mapOf(pair);
    } else {
      var tmp0_apply_0 = LinkedHashMap_init_$Create$(_this_);
      tmp0_apply_0.put_5(pair._first, pair._second);
      Unit_getInstance();
      tmp = tmp0_apply_0;
    }
    return tmp;
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this._serialVersionUID_0 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp = other.isEmpty_23();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype._get_size__22 = function () {
    return 0;
  };
  EmptyMap.prototype.isEmpty_23 = function () {
    return true;
  };
  EmptyMap.prototype.containsKey_0 = function (key) {
    return false;
  };
  EmptyMap.prototype.containsKey_5 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    else {
    }
    return this.containsKey_0((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.get_2 = function (key) {
    return null;
  };
  EmptyMap.prototype.get_20 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    else {
    }
    return this.get_2((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype._get_entries__4 = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.$metadata$ = {
    simpleName: 'EmptyMap',
    kind: 'object',
    interfaces: [Map_0, Serializable]
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function hashMapOf(pairs) {
    var tmp0_apply_0 = HashMap_init_$Create$_1(mapCapacity(pairs.length));
    putAll(tmp0_apply_0, pairs);
    return tmp0_apply_0;
  }
  function putAll(_this_, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1();
      var value = tmp1_loop_parameter.component2();
      _this_.put_5(key, value);
      Unit_getInstance();
    }
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided__1(this$0) {
    this._this$0_1 = this$0;
    this._iterator = this._this$0_1._sequence.iterator_32();
  }
  _no_name_provided__1.prototype.next_10 = function () {
    return this._this$0_1._transformer(this._iterator.next_10());
  };
  _no_name_provided__1.prototype.hasNext_10 = function () {
    return this._iterator.hasNext_10();
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this._sequence = sequence;
    this._transformer = transformer;
  }
  TransformingSequence.prototype.iterator_32 = function () {
    return new _no_name_provided__1(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function EmptySet() {
    EmptySet_instance = this;
    this._serialVersionUID_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_23();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__22 = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_23 = function () {
    return true;
  };
  EmptySet.prototype.containsAll_4 = function (elements) {
    return elements.isEmpty_23();
  };
  EmptySet.prototype.containsAll_15 = function (elements) {
    return this.containsAll_4(elements);
  };
  EmptySet.prototype.iterator_32 = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function startCoroutine(_this_, receiver, completion) {
    var tmp0_resume_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
    var tmp1_resume_0 = Unit_getInstance();
    var tmp0_success_0_1 = Companion_getInstance_2();
    tmp0_resume_0.resumeWith_27(_Result___init__impl_(Unit_getInstance()));
  }
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation_9 = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_39 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.isSubKey_0(this._get_key__24())) {
        var tmp_0 = key.tryCast_0(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element_0) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.prototype.minusKey_23 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return (key.isSubKey_0(this._get_key__24()) ? !(key.tryCast_0(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
    } else {
    }
    return Key_getInstance() === key ? EmptyCoroutineContext_getInstance() : this;
  };
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function Element_0() {
  }
  Element_0.prototype.get_39 = function (key) {
    var tmp;
    if (equals_0(this._get_key__24(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element_0.prototype.fold_22 = function (initial, operation) {
    return operation(initial, this);
  };
  Element_0.prototype.minusKey_23 = function (key) {
    return equals_0(this._get_key__24(), key) ? EmptyCoroutineContext_getInstance() : this;
  };
  Element_0.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function _no_name_provided__2() {
  }
  _no_name_provided__2.prototype.invoke_4 = function (acc, element) {
    var removed = acc.minusKey_23(element._get_key__24());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.get_39(Key_getInstance());
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.minusKey_23(Key_getInstance());
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  _no_name_provided__2.prototype.invoke_134 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineContext) : false) ? p1 : THROW_CCE();
    return this.invoke_4(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CoroutineContext() {
  }
  CoroutineContext.prototype.plus_23 = function (context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.fold_22(this, _no_name_provided_$factory_1());
    }
    return tmp;
  };
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__2();
    return function (p1, p2) {
      return i.invoke_4(p1, p2);
    };
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this._serialVersionUID_2 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_39 = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.fold_22 = function (initial, operation) {
    return initial;
  };
  EmptyCoroutineContext.prototype.plus_23 = function (context) {
    return context;
  };
  EmptyCoroutineContext.prototype.minusKey_23 = function (key) {
    return this;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function size($this) {
    var cur = $this;
    var size_0 = 2;
    while (true) {
      var tmp = cur._left;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      var tmp1 = size_0;
      size_0 = tmp1 + 1 | 0;
      Unit_getInstance();
    }
  }
  function contains_1($this, element) {
    return equals_0($this.get_39(element._get_key__24()), element);
  }
  function containsAll($this, context) {
    var cur = context;
    while (true) {
      if (!contains_1($this, cur._element))
        return false;
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return contains_1($this, isInterface(next, Element_0) ? next : THROW_CCE());
        }
      }
    }
  }
  function _no_name_provided__3() {
  }
  _no_name_provided__3.prototype.invoke_6 = function (acc, element) {
    var tmp;
    if (charSequenceLength(acc) === 0) {
      tmp = toString_1(element);
    } else {
      {
        tmp = '' + acc + ', ' + element;
      }
    }
    return tmp;
  };
  _no_name_provided__3.prototype.invoke_134 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_6(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CombinedContext(left, element) {
    this._left = left;
    this._element = element;
  }
  CombinedContext.prototype.get_39 = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur._element.get_39(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        return tmp0_safe_receiver;
      }
      Unit_getInstance();
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return next.get_39(key);
        }
      }
    }
  };
  CombinedContext.prototype.fold_22 = function (initial, operation) {
    return operation(this._left.fold_22(initial, operation), this._element);
  };
  CombinedContext.prototype.minusKey_23 = function (key) {
    var tmp0_safe_receiver = this._element.get_39(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      return this._left;
    }
    Unit_getInstance();
    var newLeft = this._left.minusKey_23(key);
    return newLeft === this._left ? this : newLeft === EmptyCoroutineContext_getInstance() ? this._element : new CombinedContext(newLeft, this._element);
  };
  CombinedContext.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = containsAll(other, this);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CombinedContext.prototype.hashCode = function () {
    return hashCode(this._left) + hashCode(this._element) | 0;
  };
  CombinedContext.prototype.toString = function () {
    return '[' + this.fold_22('', _no_name_provided_$factory_2()) + ']';
  };
  CombinedContext.$metadata$ = {
    simpleName: 'CombinedContext',
    kind: 'class',
    interfaces: [CoroutineContext, Serializable]
  };
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this._safeCast = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey._topmostKey;
    } else {
      {
        tmp_0 = baseKey;
      }
    }
    tmp._topmostKey = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.tryCast_0 = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey_0 = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function AbstractCoroutineContextElement(key) {
    this._key = key;
  }
  AbstractCoroutineContextElement.prototype._get_key__24 = function () {
    return this._key;
  };
  AbstractCoroutineContextElement.$metadata$ = {
    simpleName: 'AbstractCoroutineContextElement',
    kind: 'class',
    interfaces: [Element_0]
  };
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__3();
    return function (p1, p2) {
      return i.invoke_6(p1, p2);
    };
  }
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_3(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_3(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_2(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_3(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    if (uppercaseChar(_this_).equals(uppercaseChar(other)))
      return true;
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp1_unsafeCast_0 = tmp0_asDynamic_0.toLowerCase().charCodeAt(0);
    var tmp = numberToChar(tmp1_unsafeCast_0);
    var tmp2_asDynamic_0 = other.toString();
    var tmp3_unsafeCast_0 = tmp2_asDynamic_0.toLowerCase().charCodeAt(0);
    if (tmp.equals(numberToChar(tmp3_unsafeCast_0)))
      return true;
    else {
    }
    return false;
  }
  function trimIndent(_this_) {
    return replaceIndent(_this_, '');
  }
  function replaceIndent(_this_, newIndent) {
    var lines_0 = lines(_this_);
    var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1_2 = lines_0.iterator_32();
    while (tmp0_iterator_1_2.hasNext_10()) {
      var element_2_3 = tmp0_iterator_1_2.next_10();
      if (isNotBlank(element_2_3)) {
        tmp0_filterTo_0_1.add_16(element_2_3);
        Unit_getInstance();
      }}
    var tmp0_map_0 = tmp0_filterTo_0_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2_0 = tmp0_map_0.iterator_32();
    while (tmp0_iterator_1_2_0.hasNext_10()) {
      var item_2_3 = tmp0_iterator_1_2_0.next_10();
      tmp0_mapTo_0_1.add_16(indentWidth(item_2_3));
      Unit_getInstance();
    }
    var tmp0_elvis_lhs = minOrNull(tmp0_mapTo_0_1);
    var minCommonIndent = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp1_reindent_0 = _this_.length + imul(newIndent.length, lines_0._get_size__22()) | 0;
    var tmp2_reindent_0 = getIndentFunction(newIndent);
    var lastIndex_1 = _get_lastIndex_(lines_0);
    var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
    var index_1_2 = 0;
    var tmp0_iterator_2_3 = lines_0.iterator_32();
    while (tmp0_iterator_2_3.hasNext_10()) {
      var item_3_4 = tmp0_iterator_2_3.next_10();
      var tmp1_4_6 = index_1_2;
      index_1_2 = tmp1_4_6 + 1 | 0;
      var tmp0__anonymous__1_5_5 = checkIndexOverflow(tmp1_4_6);
      var tmp;
      if ((tmp0__anonymous__1_5_5 === 0 ? true : tmp0__anonymous__1_5_5 === lastIndex_1) ? isBlank(item_3_4) : false) {
        tmp = null;
      } else {
        var tmp0_safe_receiver_4_10 = drop(item_3_4, minCommonIndent);
        var tmp_0;
        if (tmp0_safe_receiver_4_10 == null) {
          tmp_0 = null;
        } else {
          tmp_0 = tmp2_reindent_0(tmp0_safe_receiver_4_10);
        }
        var tmp1_elvis_lhs_3_9 = tmp_0;
        tmp = tmp1_elvis_lhs_3_9 == null ? item_3_4 : tmp1_elvis_lhs_3_9;
      }
      var tmp0_safe_receiver_2_6_7 = tmp;
      if (tmp0_safe_receiver_2_6_7 == null)
        null;
      else {
        tmp1_mapIndexedNotNullTo_0_1.add_16(tmp0_safe_receiver_2_6_7);
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    var tmp_1 = StringBuilder_init_$Create$(tmp1_reindent_0);
    return joinTo$default(tmp1_mapIndexedNotNullTo_0_1, tmp_1, '\n', null, null, 0, null, null, 124, null).toString();
  }
  function indentWidth(_this_) {
    var tmp$ret$0;
    l$ret$1: do {
      var inductionVariable = 0;
      var last = charSequenceLength(_this_) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0__anonymous__3 = charSequenceGet(_this_, index_2);
          if (!isWhitespace(tmp0__anonymous__3)) {
            tmp$ret$0 = index_2;
            break l$ret$1;
          } else {
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = -1;
    }
     while (false);
    var tmp1_let_0 = tmp$ret$0;
    return tmp1_let_0 === -1 ? _this_.length : tmp1_let_0;
  }
  function getIndentFunction(indent) {
    var tmp;
    if (charSequenceLength(indent) === 0) {
      tmp = _no_name_provided_$factory_3();
    } else {
      {
        tmp = _no_name_provided_$factory_4(indent);
      }
    }
    return tmp;
  }
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_129 = function (line) {
    return line;
  };
  _no_name_provided__4.prototype.invoke_166 = function (p1) {
    return this.invoke_129((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5($indent) {
    this._$indent = $indent;
  }
  _no_name_provided__5.prototype.invoke_129 = function (line) {
    return this._$indent + line;
  };
  _no_name_provided__5.prototype.invoke_166 = function (p1) {
    return this.invoke_129((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_129(p1);
    };
  }
  function _no_name_provided_$factory_4($indent) {
    var i = new _no_name_provided__5($indent);
    return function (p1) {
      return i.invoke_129(p1);
    };
  }
  function toLongOrNull(_this_) {
    return toLongOrNull_0(_this_, 10);
  }
  function toLongOrNull_0(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    var start;
    var isNegative_0;
    var limit;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_1(new Char(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true;
        limit = new Long(0, -2147483648);
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false;
        limit = new Long(1, -2147483648);
      } else
        return null;
    } else {
      start = 0;
      isNegative_0 = false;
      limit = new Long(1, -2147483648);
    }
    var tmp0_div_0 = new Long(1, -2147483648);
    var tmp1_div_0 = 36;
    var limitForMaxRadix = tmp0_div_0.div_37(toLong(tmp1_div_0));
    var limitBeforeMul = limitForMaxRadix;
    var result = new Long(0, 0);
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        if (result.compareTo_37(limitBeforeMul) < 0) {
          if (limitBeforeMul.equals(limitForMaxRadix)) {
            limitBeforeMul = limit.div_37(toLong(radix));
            if (result.compareTo_37(limitBeforeMul) < 0) {
              return null;
            }} else {
            return null;
          }
        }var tmp2_times_0 = result;
        result = tmp2_times_0.times_27(toLong(radix));
        var tmp = result;
        if (tmp.compareTo_37(limit.plus_51(toLong(digit))) < 0)
          return null;
        else {
        }
        var tmp3_minus_0 = result;
        result = tmp3_minus_0.minus_28(toLong(digit));
      }
       while (inductionVariable < length);
    return isNegative_0 ? result : result.unaryMinus_4();
  }
  function lines(_this_) {
    return toList(lineSequence(_this_));
  }
  function isNotBlank(_this_) {
    return !isBlank(_this_);
  }
  function _get_lastIndex__0(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function lineSequence(_this_) {
    var tmp = ['\r\n', '\n', '\r'];
    return splitToSequence$default(_this_, tmp, false, 0, 6, null);
  }
  function splitToSequence(_this_, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, _no_name_provided_$factory_5(_this_));
  }
  function splitToSequence$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this_, delimiters, ignoreCase, limit);
  }
  function substring(_this_, range) {
    return toString_1(charSequenceSubSequence(_this_, range._get_start_(), range._get_endInclusive_() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    var tmp0_require_0 = limit >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Limit must be non-negative, but was ' + limit + '.';
      throw IllegalArgumentException_init_$Create$(toString_1(message_2));
    }var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_6(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function calcNext($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState = 0;
      $this._nextItem = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_2._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_2._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_2._input);
        }
      }
      if (tmp) {
        $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_2._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match = $this._this$0_2._getNextMatch($this._this$0_2._input, $this._nextSearchIndex);
          if (match == null) {
            $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_2._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1();
            var length = tmp1_container.component2();
            $this._nextItem = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState = 1;
    }
  }
  function _no_name_provided__6(this$0) {
    this._this$0_2 = this$0;
    this._nextState = -1;
    this._currentStartIndex = coerceIn(this._this$0_2._startIndex, 0, charSequenceLength(this._this$0_2._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem = null;
    this._counter = 0;
  }
  _no_name_provided__6.prototype.next_10 = function () {
    if (this._nextState === -1)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem = null;
    this._nextState = -1;
    return result;
  };
  _no_name_provided__6.prototype.hasNext_10 = function () {
    if (this._nextState === -1)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_32 = function () {
    return new _no_name_provided__6(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings._get_size__22() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last) {
        tmp = indexOf$default(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$0;
          l$ret$1: do {
            var tmp0_iterator_1 = strings.iterator_32();
            while (tmp0_iterator_1.hasNext_10()) {
              var element_2 = tmp0_iterator_1.next_10();
              if (regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase)) {
                tmp$ret$0 = element_2;
                break l$ret$1;
              } else {
              }
            }
            tmp$ret$0 = null;
          }
           while (false);
          var matchingString = tmp$ret$0;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_iterator_1_0 = strings.iterator_32();
              while (tmp0_iterator_1_0.hasNext_10()) {
                var element_2_0 = tmp0_iterator_1_0.next_10();
                if (regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase)) {
                  tmp$ret$2 = element_2_0;
                  break l$ret$3;
                } else {
                }
              }
              tmp$ret$2 = null;
            }
             while (false);
            var matchingString_0 = tmp$ret$2;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_1));
      }
    }
    return null;
  }
  function indexOf_1(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_0(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp0_nativeIndexOf_0 = _this_;
        tmp = tmp0_nativeIndexOf_0.indexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_1(_this_, string, startIndex, ignoreCase);
  }
  function lastIndexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_2(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp0_nativeLastIndexOf_0 = _this_;
        tmp = tmp0_nativeLastIndexOf_0.lastIndexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__0(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this_, string, startIndex, ignoreCase);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function indexOf_2(_this_, other, startIndex, endIndex, ignoreCase, last) {
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_1));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this_, other, startIndex, endIndex, ignoreCase, last, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last = false;
    return indexOf_2(_this_, other, startIndex, endIndex, ignoreCase, last);
  }
  function trimEnd(_this_, chars) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_trimEnd_0 = isCharSequence(_this_) ? _this_ : THROW_CCE();
      var inductionVariable = charSequenceLength(tmp0_trimEnd_0) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp1__anonymous__1 = charSequenceGet(tmp0_trimEnd_0, index_2);
          if (!contains_0(chars, tmp1__anonymous__1)) {
            tmp$ret$0 = charSequenceSubSequence(tmp0_trimEnd_0, 0, index_2 + 1 | 0);
            break l$ret$1;
          } else {
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$0 = '';
    }
     while (false);
    return toString_1(tmp$ret$0);
  }
  function trimStart(_this_, chars) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_trimStart_0 = isCharSequence(_this_) ? _this_ : THROW_CCE();
      var inductionVariable = 0;
      var last = charSequenceLength(tmp0_trimStart_0) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1__anonymous__1 = charSequenceGet(tmp0_trimStart_0, index_2);
          if (!contains_0(chars, tmp1__anonymous__1)) {
            tmp$ret$0 = charSequenceSubSequence(tmp0_trimStart_0, index_2, charSequenceLength(tmp0_trimStart_0));
            break l$ret$1;
          } else {
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = '';
    }
     while (false);
    return toString_1(tmp$ret$0);
  }
  function _no_name_provided__7($this_splitToSequence) {
    this._$this_splitToSequence = $this_splitToSequence;
  }
  _no_name_provided__7.prototype.invoke_12 = function (it) {
    return substring(this._$this_splitToSequence, it);
  };
  _no_name_provided__7.prototype.invoke_166 = function (p1) {
    return this.invoke_12(p1 instanceof IntRange ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__8.prototype.invoke_14 = function (_this__0, currentIndex) {
    var tmp0_safe_receiver = findAnyOf(_this__0, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
    }
    return tmp;
  };
  _no_name_provided__8.prototype.invoke_134 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_14(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_5($this_splitToSequence) {
    var i = new _no_name_provided__7($this_splitToSequence);
    return function (p1) {
      return i.invoke_12(p1);
    };
  }
  function _no_name_provided_$factory_6($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__8($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_14(p1, p2);
    };
  }
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl_(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_2 = this;
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_0(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function Pair(first, second) {
    this._first = first;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1 = function () {
    return this._first;
  };
  Pair.prototype.component2 = function () {
    return this._second;
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals_0(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_10 = function () {
    return this.nextInt_0();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this._step = step;
    this._finalElement = last;
    this._hasNext = this._step > 0 ? first <= last : first >= last;
    this._next_0 = this._hasNext ? first : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_10 = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0 = function () {
    var value = this._next_0;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_0 = tmp0_this._next_0 + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_4() {
    Companion_instance_3 = this;
  }
  Companion_4.prototype.fromClosedRange = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_3();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step_0 = step;
  }
  IntProgression.prototype._get_first__0 = function () {
    return this._first_0;
  };
  IntProgression.prototype._get_last__0 = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_32 = function () {
    return new IntProgressionIterator(this._first_0, this._last, this._step_0);
  };
  IntProgression.prototype.isEmpty_23 = function () {
    return this._step_0 > 0 ? this._first_0 > this._last : this._first_0 < this._last;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_23() ? other.isEmpty_23() : false) ? true : (this._first_0 === other._first_0 ? this._last === other._last : false) ? this._step_0 === other._step_0 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_23() ? -1 : imul(31, imul(31, this._first_0) + this._last | 0) + this._step_0 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_0 > 0 ? '' + this._first_0 + '..' + this._last + ' step ' + this._step_0 : '' + this._first_0 + ' downTo ' + this._last + ' step ' + (-this._step_0 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_5() {
    Companion_instance_4 = this;
    this._EMPTY = new IntRange(1, 0);
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_4();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start_ = function () {
    return this._get_first__0();
  };
  IntRange.prototype._get_endInclusive_ = function () {
    return this._get_last__0();
  };
  IntRange.prototype.isEmpty_23 = function () {
    return this._get_first__0() > this._get_last__0();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_23() ? other.isEmpty_23() : false) ? true : this._get_first__0() === other._get_first__0() ? this._get_last__0() === other._get_last__0() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_23() ? -1 : imul(31, this._get_first__0()) + this._get_last__0() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0() + '..' + this._get_last__0();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod_0 = a % b;
    return mod_0 >= 0 ? mod_0 : mod_0 + b | 0;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE = -2147483648;
    this._MAX_VALUE = 2147483647;
    this._SIZE_BYTES = 4;
    this._SIZE_BITS = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE_ = function () {
    return this._MIN_VALUE;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE_ = function () {
    return this._MAX_VALUE;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES_ = function () {
    return this._SIZE_BYTES;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS_ = function () {
    return this._SIZE_BITS;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS_
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var subrange = source.subarray(startIndex, endIndex);
      destination.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function copyToArray_0(collection) {
    var tmp;
    if (collection.toArray !== undefined) {
      var tmp0_unsafeCast_0 = collection.toArray();
      tmp = tmp0_unsafeCast_0;
    } else {
      {
        var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
        tmp = tmp1_unsafeCast_0;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator = collection.iterator_32();
    while (iterator.hasNext_10()) {
      array.push(iterator.next_10());
    }
    return array;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }return index;
  }
  function listOf_0(element) {
    return arrayListOf([element]);
  }
  function mapOf(pair) {
    return hashMapOf([pair]);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_4 = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last_0 = -1;
  }
  IteratorImpl.prototype.hasNext_10 = function () {
    return this._index < this._$this._get_size__22();
  };
  IteratorImpl.prototype.next_10 = function () {
    if (!this.hasNext_10())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last_0 = tmp1;
    return this._$this.get_51(this._last_0);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__0 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_16 = function (element) {
    this.checkIsMutable_4();
    this.add_8(this._get_size__22(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_32 = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_16 = function (element) {
    return this.indexOf_0(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_0 = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex_(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.get_51(index), element)) {
          return index;
        }}
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function _no_name_provided__9($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__9.prototype.hasNext_10 = function () {
    return this._$entryIterator.hasNext_10();
  };
  _no_name_provided__9.prototype.next_10 = function () {
    return this._$entryIterator.next_10()._get_key__24();
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key_0 = key;
    this.__value = value;
  }
  SimpleEntry.prototype._get_key__24 = function () {
    return this._key_0;
  };
  SimpleEntry.prototype._get_value__7 = function () {
    return this.__value;
  };
  SimpleEntry.prototype.setValue_1 = function (newValue) {
    var oldValue = this.__value;
    this.__value = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_16 = function (element) {
    return this.containsEntry_4(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10(this$0) {
    this._this$0_3 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__10.prototype.add_4 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__10.prototype.add_16 = function (element) {
    return this.add_4((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__10.prototype.contains_14 = function (element) {
    return this._this$0_3.containsKey_5(element);
  };
  _no_name_provided__10.prototype.contains_16 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_14((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__10.prototype.iterator_32 = function () {
    var entryIterator = this._this$0_3._get_entries__4().iterator_32();
    return new _no_name_provided__9(entryIterator);
  };
  _no_name_provided__10.prototype._get_size__22 = function () {
    return this._this$0_3._get_size__22();
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype._get_keys__1 = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__10(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.prototype.putAll_0 = function (from) {
    this.checkIsMutable_4();
    var tmp0_iterator = from._get_entries__4().iterator_32();
    while (tmp0_iterator.hasNext_10()) {
      var tmp1_loop_parameter = tmp0_iterator.next_10();
      var key = tmp1_loop_parameter._get_key__24();
      var value = tmp1_loop_parameter._get_value__7();
      this.put_5(key, value);
      Unit_getInstance();
    }
  };
  AbstractMutableMap.prototype.checkIsMutable_4 = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements));
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__22());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__22());
    return index;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__22 = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_51 = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_16 = function (element) {
    this.checkIsMutable_4();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_8 = function (index, element) {
    this.checkIsMutable_4();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_0 = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0 = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0();
  };
  ArrayList.prototype.checkIsMutable_4 = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_1 = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.getHashCode_0 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_12 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_16 = function (element) {
    return this.add_12((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_4 = function (element) {
    return this._$this_0.containsEntry_5(element);
  };
  EntrySet.prototype.iterator_32 = function () {
    return this._$this_0._internalMap.iterator_32();
  };
  EntrySet.prototype._get_size__22 = function () {
    return this._$this_0._get_size__22();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    var tmp0_require_0 = initialCapacity >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$(toString_1(message_1));
    }var tmp1_require_0 = loadFactor >= 0;
    if (!tmp1_require_0) {
      var message_1_0 = '' + 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
    }return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_2(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_1(initialCapacity) {
    return HashMap_init_$Init$_2(initialCapacity, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_5 = function (key) {
    return this._internalMap.contains_14(key);
  };
  HashMap.prototype._get_entries__4 = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_20 = function (key) {
    return this._internalMap.get_20(key);
  };
  HashMap.prototype.put_5 = function (key, value) {
    return this._internalMap.put_5(key, value);
  };
  HashMap.prototype._get_size__22 = function () {
    return this._internalMap._get_size__22();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  HashSet.prototype.add_16 = function (element) {
    var old = this._map.put_5(element, this);
    return old == null;
  };
  HashSet.prototype.contains_16 = function (element) {
    return this._map.containsKey_5(element);
  };
  HashSet.prototype.isEmpty_23 = function () {
    return this._map.isEmpty_23();
  };
  HashSet.prototype.iterator_32 = function () {
    return this._map._get_keys__1().iterator_32();
  };
  HashSet.prototype._get_size__22 = function () {
    return this._map._get_size__22();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp0_unsafeCast_0 = $this._chainOrEntry;
      var chainSize = tmp0_unsafeCast_0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_4._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_0(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_1(entry._get_key__24(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if ($this._equality_0.equals_1(element_2._get_key__24(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__11(this$0) {
    this._this$0_4 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_4._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__11.prototype.hasNext_10 = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__11.prototype.next_10 = function () {
    if (!this.hasNext_10())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp0_unsafeCast_0[this._itemIndex];
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp1_unsafeCast_0;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0 = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__22 = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_5 = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_1(entry._get_key__24(), key)) {
          return entry.setValue_1(value);
        } else {
          var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
          this._backingMap[hashCode_1] = tmp0_arrayOf_0;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_1(value);
          }chain.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_14 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_20 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__7();
  };
  InternalHashCodeMap.prototype.iterator_32 = function () {
    return new _no_name_provided__11(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0 = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this._$this_1 = $outer;
    this._last_1 = null;
    this._next_1 = null;
    this._next_1 = this._$this_1._$this_3._head;
  }
  EntryIterator.prototype.hasNext_10 = function () {
    return !(this._next_1 === null);
  };
  EntryIterator.prototype.next_10 = function () {
    if (!this.hasNext_10())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_1);
    this._last_1 = current;
    var tmp = this;
    var tmp0_takeIf_0 = current._next_2;
    var tmp_0;
    if (!(tmp0_takeIf_0 === this._$this_1._$this_3._head)) {
      tmp_0 = tmp0_takeIf_0;
    } else {
      {
        tmp_0 = null;
      }
    }
    tmp._next_1 = tmp_0;
    return current;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_2 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_2 = null;
    this._prev = null;
  }
  ChainEntry.prototype.setValue_1 = function (newValue) {
    this._$this_2.checkIsMutable_4();
    return SimpleEntry.prototype.setValue_1.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_12 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_16 = function (element) {
    return this.add_12((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_4 = function (element) {
    return this._$this_3.containsEntry_5(element);
  };
  EntrySet_0.prototype.iterator_32 = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__22 = function () {
    return this._$this_3._get_size__22();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this_, $this) {
    var tmp0_check_0 = _this_._next_2 == null ? _this_._prev == null : false;
    if (!tmp0_check_0) {
      var message_2_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString_1(message_2_1));
    }var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_2 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp1_checkNotNull_0 = _head._prev;
      var tmp$ret$0;
      l$ret$1: do {
        if (tmp1_checkNotNull_0 == null) {
          var message_2_1_0 = 'Required value was null.';
          throw IllegalStateException_init_$Create$(toString_1(message_2_1_0));
        } else {
          tmp$ret$0 = tmp1_checkNotNull_0;
          break l$ret$1;
        }
      }
       while (false);
      var _tail = tmp$ret$0;
      _this_._prev = _tail;
      _this_._next_2 = _head;
      _head._prev = _this_;
      _tail._next_2 = _this_;
    }
  }
  function LinkedHashMap_init_$Init$(original, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    $this.putAll_0(original);
    return $this;
  }
  function LinkedHashMap_init_$Create$(original) {
    return LinkedHashMap_init_$Init$(original, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.containsKey_5 = function (key) {
    return this._map_0.containsKey_5(key);
  };
  LinkedHashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_20 = function (key) {
    var tmp0_safe_receiver = this._map_0.get_20(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__7();
  };
  LinkedHashMap.prototype.put_5 = function (key, value) {
    this.checkIsMutable_4();
    var old = this._map_0.get_20(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map_0.put_5(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_1(value);
    }
  };
  LinkedHashMap.prototype._get_size__22 = function () {
    return this._map_0._get_size__22();
  };
  LinkedHashMap.prototype.checkIsMutable_4 = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__4();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__4 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__4 = function () {
    var tmp0_error_0 = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
  }
  SimpleKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KFunction() {
  }
  KFunction.$metadata$ = {
    simpleName: 'KFunction',
    kind: 'interface',
    interfaces: [KCallable]
  };
  var functionClasses;
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_56 = function (it) {
    return isObject(it);
  };
  _no_name_provided__12.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_56 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__13.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__14.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__15.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__16.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__17.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__18.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__19.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_56 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_56 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__21.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_56 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__22.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_56 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__23.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_56 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__24.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_56 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__25.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_56 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__26.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27() {
  }
  _no_name_provided__27.prototype.invoke_56 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__27.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28() {
  }
  _no_name_provided__28.prototype.invoke_56 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__28.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__29() {
  }
  _no_name_provided__29.prototype.invoke_56 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__29.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__30() {
  }
  _no_name_provided__30.prototype.invoke_56 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__30.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__31.prototype.invoke_56 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__31.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_7());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_8());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_9());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_10());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_11());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_12());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_13());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_14());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_15());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_16());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_17());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_18());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_19());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_20());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_21());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_22());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_23());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_24());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_25());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_26(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__27();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__28();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__29();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_25() {
    var i = new _no_name_provided__30();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function _no_name_provided_$factory_26($arity) {
    var i = new _no_name_provided__31($arity);
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass;
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
          }
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance()._booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        tmp = tmp_1.functionClass(e.length);
        break;
      default:var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                              } else {
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast_0 = tmp;
    return tmp1_unsafeCast_0;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0 = function () {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.length;
  };
  StringBuilder.prototype.get_51 = function (index) {
    var tmp0_getOrElse_0 = this._string;
    var tmp;
    if (index >= 0 ? index <= _get_lastIndex__0(tmp0_getOrElse_0) : false) {
      tmp = charSequenceGet(tmp0_getOrElse_0, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', length: ' + this._get_length__0() + '}');
    }
    return tmp;
  };
  StringBuilder.prototype.subSequence_1 = function (startIndex, endIndex) {
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex, endIndex);
  };
  StringBuilder.prototype.append_2 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_3 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_4 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_5 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function isWhitespace(_this_) {
    return matches(_this_.toString(), '[\\s\\xA0]');
  }
  function uppercaseChar(_this_) {
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp = tmp0_asDynamic_0.toUpperCase();
    var uppercase = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$('' + 'radix ' + radix + ' was not in valid range 2..36');
    }return radix;
  }
  function digitOf(char, radix) {
    var tmp0_let_0 = (char.compareTo_1(new Char(48)) >= 0 ? char.compareTo_1(new Char(57)) <= 0 : false) ? char.minus(new Char(48)) : (char.compareTo_1(new Char(65)) >= 0 ? char.compareTo_1(new Char(90)) <= 0 : false) ? char.minus(new Char(65)) + 10 | 0 : (char.compareTo_1(new Char(97)) >= 0 ? char.compareTo_1(new Char(122)) <= 0 : false) ? char.minus(new Char(97)) + 10 | 0 : -1;
    return tmp0_let_0 >= radix ? -1 : tmp0_let_0;
  }
  function isBlank(_this_) {
    var tmp;
    if (charSequenceLength(_this_) === 0) {
      tmp = true;
    } else {
      var tmp_0;
      if (typeof _this_ === 'string') {
        tmp_0 = _this_;
      } else {
        {
          tmp_0 = toString_1(_this_);
        }
      }
      tmp = matches(tmp_0, '^[\\s\\xA0]+$');
    }
    return tmp;
  }
  function matches(_this_, regex) {
    var result = _this_.match(regex);
    return !(result == null) ? !(result.length === 0) : false;
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function addSuppressed(_this_, exception) {
    if (!(_this_ === exception)) {
      var tmp0_unsafeCast_0 = _this_._suppressed;
      var suppressed = tmp0_unsafeCast_0;
      if (suppressed == null) {
        _this_._suppressed = mutableListOf([exception]);
      } else {
        suppressed.add_16(exception);
        Unit_getInstance();
      }
    }}
  function Companion_6() {
    Companion_instance_5 = this;
    this._MIN_VALUE_0 = new Char(0);
    this._MAX_VALUE_0 = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES_0 = 2;
    this._SIZE_BITS_0 = 16;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function Char(code) {
    Companion_getInstance_5();
    var tmp = this;
    tmp._value = _UShort___get_data__impl_(code) & 65535;
  }
  Char.prototype.compareTo_1 = function (other) {
    return this._value - other._value | 0;
  };
  Char.prototype.compareTo_6 = function (other) {
    return this.compareTo_1(other instanceof Char ? other : THROW_CCE());
  };
  Char.prototype.minus = function (other) {
    return this._value - other._value | 0;
  };
  Char.prototype.toInt_5 = function () {
    return this._value;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value === other._value;
  };
  Char.prototype.hashCode = function () {
    return this._value;
  };
  Char.prototype.toString = function () {
    var tmp0_unsafeCast_0 = String.fromCharCode(this._value);
    return tmp0_unsafeCast_0;
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function Companion_7() {
    Companion_instance_6 = this;
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_6();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.compareTo_3 = function (other) {
    return compareTo(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_6 = function (other) {
    return this.compareTo_3(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__32(array);
  }
  function charArrayOf(arr) {
    var tmp0_withType_0 = 'CharArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function _no_name_provided__32($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__32.prototype.hasNext_10 = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__32.prototype.next_10 = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.charCodeAt(index);
      var tmp1_Char_0 = tmp0_unsafeCast_0;
      var tmp_0;
      var tmp0__get_code__0_1 = new Char(0);
      if (tmp1_Char_0 < tmp0__get_code__0_1.toInt_5()) {
        tmp_0 = true;
      } else {
        {
          var tmp1__get_code__0_2 = new Char(65535);
          tmp_0 = tmp1_Char_0 > tmp1__get_code__0_2.toInt_5();
        }
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp1_Char_0);
      } else {
      }
      tmp = new Char(_UShort___init__impl_(toShort(tmp1_Char_0)));
    } else {
      tmp = a.get_51(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.length;
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a._get_length__0();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.substring(startIndex, endIndex);
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a.subSequence_1(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_27(), 24, null);
  }
  function _no_name_provided__33() {
  }
  _no_name_provided__33.prototype.invoke_56 = function (it) {
    return toString_1(it);
  };
  _no_name_provided__33.prototype.invoke_166 = function (p1) {
    return this.invoke_56((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_27() {
    var i = new _no_name_provided__33();
    return function (p1) {
      return i.invoke_56(p1);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_4());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp0_asDynamic_0 = 1;
        var ia = tmp0_asDynamic_0 / a;
        var tmp_1;
        var tmp1_asDynamic_0 = 1;
        if (ia === tmp1_asDynamic_0 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_6(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        if (obj) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function boxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function unboxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function getContinuation() {
    throw Exception_init_$Create$('Implemented as intrinsic');
  }
  function returnIfSuspended(argument, $cont) {
    throw Exception_init_$Create$('Implemented as intrinsic');
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    var tmp0_unsafeCast_0 = source.slice(0, newSize);
    var result = tmp0_unsafeCast_0;
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }var index = source.length;
    if (newSize > index) {
      result.length = newSize;
      while (index < newSize) {
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        result[tmp0] = defaultValue;
      }
    }return result;
  }
  function Companion_8() {
    Companion_instance_7 = this;
    this._MIN_VALUE_1 = new Long(0, -2147483648);
    this._MAX_VALUE_1 = new Long(-1, 2147483647);
    this._SIZE_BYTES_1 = 8;
    this._SIZE_BITS_1 = 64;
  }
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function Long(low, high) {
    Companion_getInstance_7();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_37 = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_6 = function (other) {
    return this.compareTo_37(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_51 = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_28 = function (other) {
    return subtract(this, other);
  };
  Long.prototype.times_27 = function (other) {
    return multiply(this, other);
  };
  Long.prototype.div_37 = function (other) {
    return divide(this, other);
  };
  Long.prototype.unaryMinus_4 = function () {
    return this.inv_0().plus_51(new Long(1, 0));
  };
  Long.prototype.inv_0 = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_5 = function () {
    return this._low;
  };
  Long.prototype.toDouble_4 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_4();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_4());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_37(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_37(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_37(negate(other));
      } else {
        tmp = negate(negate(_this_).div_37(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_37(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta_0 = log2 <= 48.0 ? 1.0 : Math.pow(2, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta_0;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_37(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_5();
        var tmp = toStringImpl(div, radix);
        var tmp0_unsafeCast_0 = rem.toString(radix);
        return tmp + tmp0_unsafeCast_0;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_37(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_5();
      var tmp1_unsafeCast_0 = intval.toString(radix);
      var digits = tmp1_unsafeCast_0;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_4();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_5();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp0_unsafeCast_0 = a << 16 >> 16;
    return tmp0_unsafeCast_0;
  }
  function numberToChar(a) {
    var tmp0_Char_0 = numberToInt(a) & 65535;
    var tmp;
    var tmp0__get_code__0_1 = new Char(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_5()) {
      tmp = true;
    } else {
      {
        var tmp1__get_code__0_2 = new Char(65535);
        tmp = tmp0_Char_0 > tmp1__get_code__0_2.toInt_5();
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    return new Char(_UShort___init__impl_(toShort(tmp0_Char_0)));
  }
  function toLong(a) {
    return fromInt(a);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function asList(_this_) {
    return new ArrayList(_this_);
  }
  function copyOf(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$(toString_1(message_1));
    }return arrayCopyResize(_this_, newSize, null);
  }
  function fill(_this_, element, fromIndex, toIndex) {
    Companion_getInstance().checkRangeIndexes(fromIndex, toIndex, _this_.length);
    _this_.fill(element, fromIndex, toIndex);
  }
  function fill$default(_this_, element, fromIndex, toIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = _this_.length;
    return fill(_this_, element, fromIndex, toIndex);
  }
  function releaseIntercepted($this) {
    var intercepted_0 = $this._intercepted_;
    if (!(intercepted_0 == null) ? !(intercepted_0 === $this) : false) {
      ensureNotNull($this._get_context__47().get_39(Key_getInstance())).releaseInterceptedContinuation_9(intercepted_0);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__47();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._get_exception_ = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._get_context__47 = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted_36 = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = this._get_context__47().get_39(Key_getInstance());
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation_9(this);
      var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
      this._intercepted_ = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_48 = function (result) {
    var current = this;
    var tmp;
    if (_Result___get_isFailure__impl_(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl_(result);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = Result__exceptionOrNull_impl(result);
    while (true) {
      var tmp0_with_0 = current;
      if (currentException == null) {
        tmp0_with_0._result = currentResult;
      } else {
        tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
        tmp0_with_0._exception_0 = currentException;
      }
      try {
        var outcome_2 = tmp0_with_0.doResume_37();
        if (outcome_2 === _get_COROUTINE_SUSPENDED_())
          return Unit_getInstance();
        currentResult = outcome_2;
        currentException = null;
      } catch ($p) {
        currentResult = null;
        currentException = $p;
      }
      releaseIntercepted(tmp0_with_0);
      var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
      if (completion_4 instanceof CoroutineImpl_0) {
        current = completion_4;
      } else {
        {
          if (!(currentException == null)) {
            var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
            var tmp0_failure_0_1_6 = Companion_getInstance_2();
            completion_4.resumeWith_27(_Result___init__impl_(createFailure(tmp0_resumeWithException_0_5)));
          } else {
            var tmp1_resume_0_7 = currentResult;
            var tmp0_success_0_1_8 = Companion_getInstance_2();
            completion_4.resumeWith_27(_Result___init__impl_(tmp1_resume_0_7));
          }
          return Unit_getInstance();
        }
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_27 = function (result) {
    return this.resumeWith_48(result);
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__47 = function () {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_48 = function (result) {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_27 = function (result) {
    return this.resumeWith_48(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function intercepted(_this_) {
    var tmp0_safe_receiver = _this_ instanceof CoroutineImpl_0 ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intercepted_36();
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this_, receiver, completion) {
    return new _no_name_provided__1_0(_this_, receiver, completion);
  }
  function _no_name_provided__1_0($this_createCoroutineUnintercepted, $receiver, $completion) {
    this._$this_createCoroutineUnintercepted = $this_createCoroutineUnintercepted;
    this._$receiver = $receiver;
    this._$completion = $completion;
    CoroutineImpl_0.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__1_0.prototype.doResume_2 = function () {
    if (this._get_exception_() != null)
      throw this._get_exception_();
    return this._$this_createCoroutineUnintercepted(this._$receiver, this._$completion);
  };
  _no_name_provided__1_0.prototype.doResume_37 = function () {
    return this.doResume_2();
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message, cause) {
    var tmp = IllegalStateException_init_$Init$_0(message, cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack in rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = typeof value_hack;
    return tmp0_unsafeCast_0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack];
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = obj_hack instanceof jsClass_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function AtomicRef(value) {
    this._value_0 = value;
  }
  AtomicRef.prototype._set_value__3 = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicRef.prototype._get_value__7 = function () {
    return this._value_0;
  };
  AtomicRef.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicRef.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value_0);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__7,
    set: AtomicRef.prototype._set_value__3
  });
  function atomic(initial) {
    return new AtomicRef(initial);
  }
  function AtomicBoolean(value) {
    this._value_1 = value;
  }
  AtomicBoolean.prototype._set_value__0 = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicBoolean.prototype._get_value__7 = function () {
    return this._value_1;
  };
  AtomicBoolean.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_1.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__7,
    set: AtomicBoolean.prototype._set_value__0
  });
  function atomic_0(initial) {
    return new AtomicBoolean(initial);
  }
  function AtomicInt(value) {
    this._value_2 = value;
  }
  AtomicInt.prototype._set_value__1 = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicInt.prototype._get_value__7 = function () {
    return this._value_2;
  };
  AtomicInt.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (!(this._value_2 === expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicInt.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicInt.prototype.getAndIncrement$atomicfu = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.getAndDecrement$atomicfu = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.getAndAdd$atomicfu = function (delta_0) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return oldValue;
  };
  AtomicInt.prototype.addAndGet$atomicfu = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return this._value_2;
  };
  AtomicInt.prototype.incrementAndGet$atomicfu = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.decrementAndGet$atomicfu = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 - 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__7,
    set: AtomicInt.prototype._set_value__1
  });
  function atomic_1(initial) {
    return new AtomicInt(initial);
  }
  function AbstractCoroutine(parentContext, active) {
    JobSupport.call(this, active);
    this._parentContext = parentContext;
    this._context = this._parentContext.plus_23(this);
  }
  AbstractCoroutine.prototype._get_parentContext__0 = function () {
    return this._parentContext;
  };
  AbstractCoroutine.prototype._get_context__47 = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_coroutineContext__6 = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_isActive__20 = function () {
    return JobSupport.prototype._get_isActive__20.call(this);
  };
  AbstractCoroutine.prototype.initParentJob_4 = function () {
    this.initParentJobInternal_7(this._parentContext.get_39(Key_getInstance_2()));
  };
  AbstractCoroutine.prototype.onStart_4 = function () {
  };
  AbstractCoroutine.prototype.onStartInternal_7 = function () {
    this.onStart_4();
  };
  AbstractCoroutine.prototype.onCompleted_5 = function (value) {
  };
  AbstractCoroutine.prototype.onCancelled_4 = function (cause, handled) {
  };
  AbstractCoroutine.prototype.cancellationExceptionMessage_7 = function () {
    return '' + _get_classSimpleName_(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.onCompletionInternal_7 = function (state) {
    if (state instanceof CompletedExceptionally)
      this.onCancelled_4(state._cause, state._get_handled__0());
    else {
      {
        this.onCompleted_5((state == null ? true : isObject(state)) ? state : THROW_CCE());
      }
    }
  };
  AbstractCoroutine.prototype.resumeWith_27 = function (result) {
    var state = this.makeCompletingOnce_5(toState$default(result, null, 1, null));
    if (state === COMPLETING_WAITING_CHILDREN)
      return Unit_getInstance();
    this.afterResume_4(state);
  };
  AbstractCoroutine.prototype.afterResume_4 = function (state) {
    return this.afterCompletion_7(state);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_7 = function (exception) {
    handleCoroutineException(this._context, exception);
  };
  AbstractCoroutine.prototype.nameString_8 = function () {
    var tmp0_elvis_lhs = _get_coroutineName_(this._context);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.nameString_8.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '' + '"' + coroutineName + '":' + JobSupport.prototype.nameString_8.call(this);
  };
  AbstractCoroutine.prototype.start_0 = function (start, receiver, block) {
    this.initParentJob_4();
    start.invoke_62(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = {
    simpleName: 'AbstractCoroutine',
    kind: 'class',
    interfaces: [Job, Continuation, CoroutineScope]
  };
  function launch(_this_, context, start, block) {
    var newContext = newCoroutineContext(_this_, context);
    var coroutine = start._get_isLazy_() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_0(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this_, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this_, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, active);
  }
  StandaloneCoroutine.prototype.handleJobException_7 = function (exception) {
    handleCoroutineException(this._get_context__47(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = {
    simpleName: 'StandaloneCoroutine',
    kind: 'class',
    interfaces: []
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this._continuation = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.onStart_4 = function () {
    startCoroutineCancellable_0(this._continuation, this);
  };
  LazyStandaloneCoroutine.$metadata$ = {
    simpleName: 'LazyStandaloneCoroutine',
    kind: 'class',
    interfaces: []
  };
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function removeOnCancellation(_this_, node) {
    var tmp0__get_asHandler__0 = new RemoveOnCancel(node);
    return _this_.invokeOnCancellation_0(tmp0__get_asHandler__0);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0;
      if (tmp0_safe_receiver.resetStateReusable()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this._node = node;
  }
  RemoveOnCancel.prototype.invoke_69 = function (cause) {
    this._node.remove_19();
    Unit_getInstance();
  };
  RemoveOnCancel.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  RemoveOnCancel.prototype.toString = function () {
    return '' + 'RemoveOnCancel[' + this._node + ']';
  };
  RemoveOnCancel.$metadata$ = {
    simpleName: 'RemoveOnCancel',
    kind: 'class',
    interfaces: []
  };
  var RESUME_TOKEN;
  function _set_parentHandle_($this, value) {
    $this.__parentHandle._value_0 = value;
  }
  function _get_parentHandle_($this) {
    return $this.__parentHandle._value_0;
  }
  function isReusable($this) {
    var tmp;
    var tmp_0 = $this._delegate;
    if (tmp_0 instanceof DispatchedContinuation) {
      tmp = $this._delegate.isReusable($this);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function setupCancellation($this) {
    if (checkCompleted($this))
      return Unit_getInstance();
    if (!(_get_parentHandle_($this) === null))
      return Unit_getInstance();
    var tmp0_elvis_lhs = $this._delegate._get_context__47().get_39(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp0__get_asHandler__0 = new ChildContinuation(parent, $this);
    var handle = parent.invokeOnCompletion$default_8(true, false, tmp0__get_asHandler__0, 2, null);
    _set_parentHandle_($this, handle);
    if ($this._get_isCompleted__8() ? !isReusable($this) : false) {
      handle.dispose_10();
      _set_parentHandle_($this, NonDisposableHandle_getInstance());
    }}
  function checkCompleted($this) {
    var completed = $this._get_isCompleted__8();
    if (!_get_isReusableMode_($this._get_resumeMode__0()))
      return completed;
    var tmp = $this._delegate;
    var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return completed;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var dispatched = tmp_0;
    var tmp1_elvis_lhs = dispatched.checkPostponedCancellation($this);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return completed;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var cause = tmp_1;
    if (!completed) {
      $this.cancel_2(cause);
      Unit_getInstance();
    }return true;
  }
  function cancelLater($this, cause) {
    if (!_get_isReusableMode_($this._get_resumeMode__0()))
      return false;
    var tmp = $this._delegate;
    var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var dispatched = tmp_0;
    return dispatched.postponeCancellation(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this._get_context__47(), new CompletionHandlerException('' + 'Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    var tmp0_loop_0 = $this.__decision;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_2;
      var tmp0_subject_2 = tmp1__anonymous__1;
      switch (tmp0_subject_2) {
        case 0:
          if ($this.__decision.compareAndSet$atomicfu(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:var tmp0_error_0_3 = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      }
    }
    Unit_getInstance();
  }
  function tryResume($this) {
    var tmp0_loop_0 = $this.__decision;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_2;
      var tmp0_subject_2 = tmp1__anonymous__1;
      switch (tmp0_subject_2) {
        case 0:
          if ($this.__decision.compareAndSet$atomicfu(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:var tmp0_error_0_3 = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      }
    }
    Unit_getInstance();
  }
  function multipleHandlersError($this, handler, state) {
    var tmp0_error_0 = '' + "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + state;
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      {
        tmp = new InvokeOnCancel(handler);
      }
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      tmp = proposedUpdate;
    } else {
      if (!_get_isCancellableMode_(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            {
              tmp_2 = false;
            }
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = !(idempotent == null);
          }
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          {
            tmp = proposedUpdate;
          }
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    var tmp0_loop_0 = $this.__state;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        var tmp0_subject_2 = tmp1__anonymous__1;
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
          var update_3 = resumedState($this, tmp1__anonymous__1, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, update_3)) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject_2 instanceof CancelledContinuation) {
            if (tmp1__anonymous__1.makeResumed()) {
              var tmp1_safe_receiver_4 = onCancellation;
              if (tmp1_safe_receiver_4 == null)
                null;
              else {
                $this.callOnCancellation(tmp1_safe_receiver_4, tmp1__anonymous__1._get_cause__21());
                Unit_getInstance();
              }
              Unit_getInstance();
              return Unit_getInstance();
            }} else {
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
       while (false);
    }
    Unit_getInstance();
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    var tmp0_loop_0 = $this.__state;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        var tmp0_subject_2 = tmp1__anonymous__1;
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
          var update_3 = resumedState($this, tmp1__anonymous__1, proposedUpdate, $this._get_resumeMode__0(), onCancellation, idempotent);
          if (!$this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, update_3)) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }detachChildIfNonResuable($this);
          return RESUME_TOKEN;
        } else {
          if (tmp0_subject_2 instanceof CompletedContinuation_0) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__1._idempotentResume === idempotent : false) {
              tmp = RESUME_TOKEN;
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
       while (false);
    }
    Unit_getInstance();
  }
  function alreadyResumedError($this, proposedUpdate) {
    var tmp0_error_0 = '' + 'Already resumed, but proposed with update ' + proposedUpdate;
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this._delegate = delegate;
    this._context_0 = this._delegate._get_context__47();
    this.__decision = atomic_1(0);
    this.__state = atomic(Active_getInstance());
    this.__parentHandle = atomic(null);
  }
  CancellableContinuationImpl.prototype._get_delegate__1 = function () {
    return this._delegate;
  };
  CancellableContinuationImpl.prototype._get_context__47 = function () {
    return this._context_0;
  };
  CancellableContinuationImpl.prototype._get_state__8 = function () {
    return this.__state._value_0;
  };
  CancellableContinuationImpl.prototype._get_isCompleted__8 = function () {
    var tmp = this._get_state__8();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.initCancellability = function () {
    setupCancellation(this);
  };
  CancellableContinuationImpl.prototype.resetStateReusable = function () {
    var state = this.__state._value_0;
    var tmp;
    if (state instanceof CompletedContinuation_0) {
      tmp = !(state._idempotentResume == null);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      this.detachChild();
      return false;
    } else {
    }
    this.__decision._value_2 = 0;
    this.__state._value_0 = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.takeState_1 = function () {
    return this._get_state__8();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_1 = function (takenState, cause) {
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
        var tmp0_error_0_3 = 'Not completed';
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      } else {
        if (tmp0_subject_2 instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject_2 instanceof CompletedContinuation_0) {
            var tmp1_check_0_4 = !tmp1__anonymous__1._get_cancelled_();
            if (!tmp1_check_0_4) {
              var message_1_5 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString_1(message_1_5));
            }var tmp = tmp1__anonymous__1;
            var update_6 = tmp.copy$default(null, null, null, null, cause, 15, null);
            if (this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, update_6)) {
              tmp1__anonymous__1.invokeHandlers(this, cause);
              return Unit_getInstance();
            }} else {
            {
              if (this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, CompletedContinuation_init_$Create$(tmp1__anonymous__1, null, null, null, cause, 14, null))) {
                return Unit_getInstance();
              } else {
              }
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.cancel_2 = function (cause) {
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        if (!(!(tmp1__anonymous__1 == null) ? isInterface(tmp1__anonymous__1, NotCompleted) : false))
          return false;
        else {
        }
        var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1 instanceof CancelHandler);
        if (!this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, update_2)) {
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        }var tmp0_safe_receiver_3 = tmp1__anonymous__1 instanceof CancelHandler ? tmp1__anonymous__1 : null;
        if (tmp0_safe_receiver_3 == null)
          null;
        else {
          this.callCancelHandler(tmp0_safe_receiver_3, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
        detachChildIfNonResuable(this);
        dispatchResume(this, this._get_resumeMode__0());
        return true;
      }
       while (false);
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.parentCancelled_2 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_2(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this._get_context__47(), new CompletionHandlerException('' + 'Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this._get_context__47(), new CompletionHandlerException('' + 'Exception in resume onCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause = function (parent) {
    return parent.getCancellationException_8();
  };
  CancellableContinuationImpl.prototype.getResult = function () {
    setupCancellation(this);
    if (trySuspend(this))
      return _get_COROUTINE_SUSPENDED_();
    var state = this._get_state__8();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state._cause, this);
    else {
    }
    if (_get_isCancellableMode_(this._get_resumeMode__0())) {
      var job = this._get_context__47().get_39(Key_getInstance_2());
      if (!(job == null) ? !job._get_isActive__20() : false) {
        var cause = job.getCancellationException_8();
        this.cancelCompletedResult_1(state, cause);
        throw recoverStackTrace(cause, this);
      }}return this.getSuccessfulResult_1(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_27 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this._get_resumeMode__0();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.resume_0 = function (value, onCancellation) {
    return resumeImpl(this, value, this._get_resumeMode__0(), onCancellation);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_0 = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (tmp0_subject_2 instanceof Active) {
        if (this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject_2 instanceof CancelHandler)
          multipleHandlersError(this, handler, tmp1__anonymous__1);
        else {
          if (tmp0_subject_2 instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__1.makeHandled_0())
              multipleHandlersError(this, handler, tmp1__anonymous__1);
            if (tmp1__anonymous__1 instanceof CancelledContinuation) {
              var tmp1_safe_receiver_3 = tmp1__anonymous__1 instanceof CompletedExceptionally ? tmp1__anonymous__1 : null;
              callCancelHandler(this, handler, tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3._cause);
            } else {
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CompletedContinuation_0) {
              if (!(tmp1__anonymous__1._cancelHandler == null))
                multipleHandlersError(this, handler, tmp1__anonymous__1);
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              else {
              }
              if (tmp1__anonymous__1._get_cancelled_()) {
                callCancelHandler(this, handler, tmp1__anonymous__1._cancelCause);
                return Unit_getInstance();
              }var tmp = tmp1__anonymous__1;
              var update_4 = tmp.copy$default(null, cancelHandler, null, null, null, 29, null);
              if (this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, update_4))
                return Unit_getInstance();
            } else {
              {
                if (cancelHandler instanceof BeforeResumeCancelHandler)
                  return Unit_getInstance();
                else {
                }
                var update_5 = CompletedContinuation_init_$Create$(tmp1__anonymous__1, cancelHandler, null, null, null, 28, null);
                if (this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, update_5))
                  return Unit_getInstance();
              }
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.detachChild = function () {
    var handle = _get_parentHandle_(this);
    var tmp0_safe_receiver = handle;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dispose_10();
      Unit_getInstance();
    }
    Unit_getInstance();
    _set_parentHandle_(this, NonDisposableHandle_getInstance());
  };
  CancellableContinuationImpl.prototype.tryResume_0 = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.completeResume_0 = function (token) {
    dispatchResume(this, this._get_resumeMode__0());
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_1 = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation_0) {
      var tmp_0 = state._result_0;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      {
        tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_1 = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_1.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = recoverStackTrace(tmp0_safe_receiver, this._delegate);
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return '' + this.nameString_8() + '(' + toDebugString(this._delegate) + '){' + this._get_state__8() + '}@' + _get_hexAddress_(this);
  };
  CancellableContinuationImpl.prototype.nameString_8 = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation_0.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation_0.prototype));
  }
  function CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this._result_0 = result;
    this._cancelHandler = cancelHandler;
    this._onCancellation = onCancellation;
    this._idempotentResume = idempotentResume;
    this._cancelCause = cancelCause;
  }
  CompletedContinuation_0.prototype._get_cancelled_ = function () {
    return !(this._cancelCause == null);
  };
  CompletedContinuation_0.prototype.invokeHandlers = function (cont, cause) {
    var tmp0_safe_receiver = this._cancelHandler;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cont.callCancelHandler(tmp0_safe_receiver, cause);
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this._onCancellation;
    if (tmp1_safe_receiver == null)
      null;
    else {
      cont.callOnCancellation(tmp1_safe_receiver, cause);
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CompletedContinuation_0.prototype.copy = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.copy$default = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this._result_0;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this._cancelHandler;
    if (!(($mask0 & 4) === 0))
      onCancellation = this._onCancellation;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this._idempotentResume;
    if (!(($mask0 & 16) === 0))
      cancelCause = this._cancelCause;
    return this.copy(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.toString = function () {
    return '' + 'CompletedContinuation(result=' + this._result_0 + ', cancelHandler=' + this._cancelHandler + ', onCancellation=' + this._onCancellation + ', idempotentResume=' + this._idempotentResume + ', cancelCause=' + this._cancelCause + ')';
  };
  CompletedContinuation_0.prototype.hashCode = function () {
    return imul(imul(imul(imul(this._result_0 == null ? 0 : hashCode(this._result_0), 31) + (this._cancelHandler == null ? 0 : hashCode(this._cancelHandler)) | 0, 31) + (this._onCancellation == null ? 0 : hashCode(this._onCancellation)) | 0, 31) + (this._idempotentResume == null ? 0 : hashCode(this._idempotentResume)) | 0, 31) + (this._cancelCause == null ? 0 : hashCode(this._cancelCause)) | 0;
  };
  CompletedContinuation_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedContinuation_0 ? other : THROW_CCE();
    if (!equals_0(this._result_0, tmp0_other_with_cast._result_0))
      return false;
    if (!equals_0(this._cancelHandler, tmp0_other_with_cast._cancelHandler))
      return false;
    if (!equals_0(this._onCancellation, tmp0_other_with_cast._onCancellation))
      return false;
    if (!equals_0(this._idempotentResume, tmp0_other_with_cast._idempotentResume))
      return false;
    if (!equals_0(this._cancelCause, tmp0_other_with_cast._cancelCause))
      return false;
    return true;
  };
  CompletedContinuation_0.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'class',
    interfaces: []
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = {
    simpleName: 'BeforeResumeCancelHandler',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this._handler = handler;
  }
  InvokeOnCancel.prototype.invoke_69 = function (cause) {
    this._handler(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return '' + 'InvokeOnCancel[' + _get_classSimpleName_(this._handler) + '@' + _get_hexAddress_(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {
    simpleName: 'InvokeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = {
    simpleName: 'CompletableJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this._cause = cause;
    this.__handled = atomic_0(handled);
  }
  CompletedExceptionally.prototype._get_cause__21 = function () {
    return this._cause;
  };
  CompletedExceptionally.prototype._get_handled__0 = function () {
    return this.__handled._value_1;
  };
  CompletedExceptionally.prototype.makeHandled_0 = function () {
    return this.__handled.compareAndSet$atomicfu(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '[' + this._cause + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('' + 'Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.__resumed = atomic_0(false);
  }
  CancelledContinuation.prototype.makeResumed = function () {
    return this.__resumed.compareAndSet$atomicfu(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this_, caller) {
    var exception_1 = Result__exceptionOrNull_impl(_this_);
    var tmp;
    if (exception_1 == null) {
      var tmp_0 = _Result___get_value__impl_(_this_);
      var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = tmp0__anonymous__2;
    } else {
      var tmp_1 = recoverStackTrace(exception_1, caller);
      tmp = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
    }
    return tmp;
  }
  function toState_0(_this_, onCancellation) {
    var exception_1 = Result__exceptionOrNull_impl(_this_);
    var tmp;
    if (exception_1 == null) {
      var tmp_0 = _Result___get_value__impl_(_this_);
      var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__2, onCancellation) : tmp0__anonymous__2;
    } else {
      tmp = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
    }
    return tmp;
  }
  function toState$default(_this_, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this_, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this._result_1 = result;
    this._onCancellation_0 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return '' + 'CompletedWithCancellation(result=' + this._result_1 + ', onCancellation=' + this._onCancellation_0 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    return imul(this._result_1 == null ? 0 : hashCode(this._result_1), 31) + hashCode(this._onCancellation_0) | 0;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals_0(this._result_1, tmp0_other_with_cast._result_1))
      return false;
    if (!equals_0(this._onCancellation_0, tmp0_other_with_cast._onCancellation_0))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp0_failure_0 = Companion_getInstance_2();
      var tmp1_failure_0 = recoverStackTrace(state._cause, uCont);
      tmp = _Result___init__impl_(createFailure(tmp1_failure_0));
    } else {
      {
        var tmp2_success_0 = Companion_getInstance_2();
        var tmp3_success_0 = (state == null ? true : isObject(state)) ? state : THROW_CCE();
        tmp = _Result___init__impl_(tmp3_success_0);
      }
    }
    return tmp;
  }
  function _no_name_provided__34() {
  }
  _no_name_provided__34.prototype.invoke_60 = function (it) {
    return it instanceof CoroutineDispatcher ? it : null;
  };
  _no_name_provided__34.prototype.invoke_166 = function (p1) {
    return this.invoke_60((!(p1 == null) ? isInterface(p1, Element_0) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Key_1() {
    Key_instance_0 = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, _no_name_provided_$factory_28());
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: []
  };
  var Key_instance_0;
  function Key_getInstance_0() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_8 = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.interceptContinuation_9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_9 = function (continuation) {
    var tmp0_safe_receiver = (continuation instanceof DispatchedContinuation ? continuation : THROW_CCE())._get_reusableCancellableContinuation_();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function _no_name_provided_$factory_28() {
    var i = new _no_name_provided__34();
    return function (p1) {
      return i.invoke_60(p1);
    };
  }
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_39(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.handleException__error(context, exception);
        return Unit_getInstance();
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_1;
  function Key_getInstance_1() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    return tmp0_apply_0;
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {
    simpleName: 'CoroutineScope',
    kind: 'interface',
    interfaces: []
  };
  function plus_0(_this_, context) {
    return new ContextScope(_this_._get_coroutineContext__6().plus_23(context));
  }
  function MainScope() {
    return new ContextScope(SupervisorJob$default(null, 1, null).plus_23(Dispatchers_getInstance()._Main));
  }
  function cancel(_this_, message, cause) {
    return cancel_0(_this_, new CancellationException(message, cause));
  }
  function cancel_0(_this_, cause) {
    var tmp0_elvis_lhs = _this_._get_coroutineContext__6().get_39(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error_0 = '' + 'Scope cannot be cancelled because it does not have a job: ' + _this_;
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.cancel_16(cause);
  }
  function coroutineScope(block, $cont) {
    var tmp0__anonymous__1 = $cont;
    var coroutine_2 = new ScopeCoroutine(tmp0__anonymous__1._get_context__47(), tmp0__anonymous__1);
    return startUndispatchedOrReturn(coroutine_2, coroutine_2, block);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.invoke_62 = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject.equals(CoroutineStart_DEFAULT_getInstance())) {
      tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
    } else if (tmp0_subject.equals(CoroutineStart_ATOMIC_getInstance())) {
      tmp = startCoroutine(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_UNDISPATCHED_getInstance())) {
      tmp = startCoroutineUndispatched(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_LAZY_getInstance())) {
      tmp = Unit_getInstance();
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  CoroutineStart.prototype._get_isLazy_ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = {
    simpleName: 'CoroutineStart',
    kind: 'class',
    interfaces: []
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function Delay() {
  }
  Delay.$metadata$ = {
    simpleName: 'Delay',
    kind: 'interface',
    interfaces: []
  };
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this._useCount = new Long(0, 0);
    this._shared = false;
    this._unconfinedQueue = null;
  }
  EventLoop.prototype.processUnconfinedEvent_0 = function () {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_4();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_3();
    return true;
  };
  EventLoop.prototype.dispatchUnconfined_0 = function (task) {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = new ArrayQueue();
      this._unconfinedQueue = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_13(task);
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__0 = function () {
    return this._useCount.compareTo_37(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__0 = function () {
    var tmp0_safe_receiver = this._unconfinedQueue;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__4();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_0 = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.plus_51(delta(this, unconfined));
    if (!unconfined)
      this._shared = true;
  };
  EventLoop.prototype.decrementUseCount_0 = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.minus_28(delta(this, unconfined));
    if (this._useCount.compareTo_37(new Long(0, 0)) > 0)
      return Unit_getInstance();
    if (this._shared) {
      this.shutdown_0();
    }};
  EventLoop.prototype.shutdown_0 = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this._ref = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop_ = function () {
    var tmp0_elvis_lhs = this._ref.get_40();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance()._ref.set_0(tmp0_also_0);
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function Key_3() {
    Key_instance_2 = this;
    Key_getInstance_1();
    Unit_getInstance();
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_2;
  function Key_getInstance_2() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  Job.prototype.invokeOnCompletion$default_8 = function (onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.invokeOnCompletion_10(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  };
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function ChildJob() {
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose_10 = function () {
  };
  NonDisposableHandle.prototype.childCancelled_10 = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function ensureActive(_this_) {
    if (!_this_._get_isActive__20())
      throw _this_.getCancellationException_8();
  }
  function ensureActive_0(_this_) {
    var tmp0_safe_receiver = _this_.get_39(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive(tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
  }
  var COMPLETING_ALREADY;
  var COMPLETING_WAITING_CHILDREN;
  var COMPLETING_RETRY;
  var TOO_LATE_TO_CANCEL;
  var SEALED;
  var EMPTY_NEW;
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this._isActive = isActive;
  }
  Empty.prototype._get_isActive__20 = function () {
    return this._isActive;
  };
  Empty.prototype._get_list__10 = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return '' + 'Empty{' + (this._isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList_0() {
    LinkedListHead.call(this);
  }
  NodeList_0.prototype._get_isActive__20 = function () {
    return true;
  };
  NodeList_0.prototype._get_list__10 = function () {
    return this;
  };
  NodeList_0.prototype.getString = function (state) {
    var tmp0_apply_0_1 = StringBuilder_init_$Create$_0();
    tmp0_apply_0_1.append_5('List{');
    Unit_getInstance();
    tmp0_apply_0_1.append_5(state);
    Unit_getInstance();
    tmp0_apply_0_1.append_5('}[');
    Unit_getInstance();
    var first_3 = true;
    var cur_1_4 = this._get__next__2();
    while (!equals_0(cur_1_4, this)) {
      if (cur_1_4 instanceof JobNode) {
        var tmp0__anonymous__2_5 = cur_1_4;
        if (first_3)
          first_3 = false;
        else {
          tmp0_apply_0_1.append_5(', ');
          Unit_getInstance();
        }
        tmp0_apply_0_1.append_4(tmp0__anonymous__2_5);
        Unit_getInstance();
      } else {
      }
      cur_1_4 = cur_1_4.__next;
    }
    tmp0_apply_0_1.append_5(']');
    Unit_getInstance();
    return tmp0_apply_0_1.toString();
  };
  NodeList_0.prototype.toString = function () {
    return DEBUG ? this.getString('Active') : anyToString(this);
  };
  NodeList_0.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode(job) {
    CompletionHandlerBase.call(this);
    this._job = job;
  }
  JobNode.prototype._get_job__15 = function () {
    return this._job;
  };
  JobNode.prototype._get_isActive__20 = function () {
    return true;
  };
  JobNode.prototype._get_list__10 = function () {
    return null;
  };
  JobNode.prototype.dispose_10 = function () {
    var tmp = this._job;
    return (tmp instanceof JobSupport ? tmp : THROW_CCE()).removeNode_7(this);
  };
  JobNode.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + '[job@' + _get_hexAddress_(this._job) + ']';
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function _set_exceptionsHolder_($this, value) {
    $this.__exceptionsHolder._value_0 = value;
  }
  function _get_exceptionsHolder_($this) {
    return $this.__exceptionsHolder._value_0;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$_0(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
    var wasCancelling = false;
    wasCancelling = state._get_isCancelling_();
    var exceptions_2 = state.sealLocked(proposedException);
    var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
    if (!(finalCause_3 == null))
      addSuppressedExceptions($this, finalCause_3, exceptions_2);
    var finalException = finalCause_3;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_7(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_0();
        Unit_getInstance();
      }}if (!wasCancelling)
      $this.onCancelling_7(finalException);
    $this.onCompletionInternal_7(finalState);
    var casSuccess = $this.__state_0.compareAndSet$atomicfu(state, boxIncomplete(finalState));
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_23()) {
      if (state._get_isCancelling_()) {
        var tmp0_defaultCancellationException_0 = null;
        var tmp1_defaultCancellationException_0 = null;
        var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
        return new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_7() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, $this);
      }return null;
    }var tmp$ret$0;
    l$ret$1: do {
      var tmp0_iterator_1 = exceptions.iterator_32();
      while (tmp0_iterator_1.hasNext_10()) {
        var element_2 = tmp0_iterator_1.next_10();
        if (!(element_2 instanceof CancellationException)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    var firstNonCancellation = tmp$ret$0;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_51(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$2;
      l$ret$3: do {
        var tmp0_iterator_1_0 = exceptions.iterator_32();
        while (tmp0_iterator_1_0.hasNext_10()) {
          var element_2_0 = tmp0_iterator_1_0.next_10();
          var tmp;
          if (!(element_2_0 === first)) {
            tmp = element_2_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$2 = element_2_0;
            break l$ret$3;
          } else {
          }
        }
        tmp$ret$2 = null;
      }
       while (false);
      var detailedTimeoutException = tmp$ret$2;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__22() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__22());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_32();
    while (tmp0_iterator.hasNext_10()) {
      var exception = tmp0_iterator.next_10();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_16(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    if (!$this.__state_0.compareAndSet$atomicfu(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_7(null);
    $this.onCompletionInternal_7(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__7();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dispose_10();
      $this._set_parentHandle__7(NonDisposableHandle_getInstance());
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._cause;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_7(new CompletionHandlerException('' + 'Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__10();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_7(cause);
    var exception_1 = null;
    var cur_1 = list._get__next__2();
    while (!equals_0(cur_1, list)) {
      if (cur_1 instanceof JobCancellingNode) {
        var tmp0__anonymous__2_2 = cur_1;
        try {
          tmp0__anonymous__2_2.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver_5_5 = exception_1;
            var tmp;
            if (tmp0_safe_receiver_5_5 == null) {
              tmp = null;
            } else {
              tmp = tmp0_safe_receiver_5_5;
            }
            var tmp1_elvis_lhs_4_4 = tmp;
            if (tmp1_elvis_lhs_4_4 == null) {
              exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
              Unit_getInstance();
            } else
              tmp1_elvis_lhs_4_4;
            Unit_getInstance();
          } else {
            {
              throw $p;
            }
          }
        }
      } else {
      }
      cur_1 = cur_1.__next;
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      $this.handleOnCompletionException_7(tmp0_safe_receiver_8);
      Unit_getInstance();
    }
    Unit_getInstance();
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__7())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__7();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }return parent.childCancelled_10(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this_, $this, cause) {
    var exception_1 = null;
    var cur_1 = _this_._get__next__2();
    while (!equals_0(cur_1, _this_)) {
      if (cur_1 instanceof JobNode) {
        var tmp0__anonymous__2_2 = cur_1;
        try {
          tmp0__anonymous__2_2.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver_5_5 = exception_1;
            var tmp;
            if (tmp0_safe_receiver_5_5 == null) {
              tmp = null;
            } else {
              tmp = tmp0_safe_receiver_5_5;
            }
            var tmp1_elvis_lhs_4_4 = tmp;
            if (tmp1_elvis_lhs_4_4 == null) {
              exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
              Unit_getInstance();
            } else
              tmp1_elvis_lhs_4_4;
            Unit_getInstance();
          } else {
            {
              throw $p;
            }
          }
        }
      } else {
      }
      cur_1 = cur_1.__next;
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      $this.handleOnCompletionException_7(tmp0_safe_receiver_8);
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state._isActive)
        return 0;
      if (!$this.__state_0.compareAndSet$atomicfu(state, EMPTY_ACTIVE))
        return -1;
      $this.onStartInternal_7();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.__state_0.compareAndSet$atomicfu(state, state._list_0))
          return -1;
        $this.onStartInternal_7();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_safe_receiver = handler instanceof JobCancellingNode ? handler : null;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? new InvokeOnCancelling($this, handler) : tmp1_elvis_lhs;
    } else {
      var tmp2_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_1;
      if (tmp2_safe_receiver == null) {
        tmp_1 = null;
      } else {
        tmp_1 = tmp2_safe_receiver;
      }
      var tmp3_elvis_lhs = tmp_1;
      tmp = tmp3_elvis_lhs == null ? new InvokeOnCompletion($this, handler) : tmp3_elvis_lhs;
    }
    return tmp;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$0;
    l$ret$1: do {
      if (!($this._get_state__8() === expect)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      list.addLast_22(node);
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList_0();
    var update = state._isActive ? list : new InactiveNodeList(list);
    $this.__state_0.compareAndSet$atomicfu(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_6(new NodeList_0());
    Unit_getInstance();
    var list = state.__next;
    $this.__state_0.compareAndSet$atomicfu(state, list);
    Unit_getInstance();
  }
  function cancelMakeCompleting($this, cause) {
    while (true) {
      var tmp0__anonymous__1 = $this._get_state__8();
      var tmp;
      if (!(!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false)) {
        tmp = true;
      } else {
        {
          var tmp_0;
          if (tmp0__anonymous__1 instanceof Finishing) {
            tmp_0 = tmp0__anonymous__1._get_isCompleting_();
          } else {
            {
              tmp_0 = false;
            }
          }
          tmp = tmp_0;
        }
      }
      if (tmp) {
        return COMPLETING_ALREADY;
      } else {
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1, proposedUpdate_2);
      if (!(finalState_3 === COMPLETING_RETRY))
        return finalState_3;
    }
    Unit_getInstance();
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_defaultCancellationException_0 = null;
        var tmp1_defaultCancellationException_0 = null;
        var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
        tmp_0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_7() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, $this);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_8();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = $this._get_state__8();
        var tmp0_subject_2 = tmp0__anonymous__1;
        if (tmp0_subject_2 instanceof Finishing) {
          if (tmp0__anonymous__1._get_isSealed_())
            return TOO_LATE_TO_CANCEL;
          var wasCancelling_2_4 = tmp0__anonymous__1._get_isCancelling_();
          if (!(cause == null) ? true : !wasCancelling_2_4) {
            var tmp0_elvis_lhs_4_6 = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs_4_6 == null) {
              var tmp0_also_0_5_7 = createCauseException($this, cause);
              causeExceptionCache = tmp0_also_0_5_7;
              tmp = tmp0_also_0_5_7;
            } else {
              tmp = tmp0_elvis_lhs_4_6;
            }
            var causeException_3_5 = tmp;
            tmp0__anonymous__1.addExceptionLocked(causeException_3_5);
          }var tmp1_takeIf_0_6_8 = tmp0__anonymous__1._get_rootCause_();
          var tmp_0;
          if (!wasCancelling_2_4) {
            tmp_0 = tmp1_takeIf_0_6_8;
          } else {
            {
              tmp_0 = null;
            }
          }
          var notifyRootCause_3 = tmp_0;
          var tmp1_safe_receiver_9 = notifyRootCause_3;
          if (tmp1_safe_receiver_9 == null)
            null;
          else {
            notifyCancelling($this, tmp0__anonymous__1._list, tmp1_safe_receiver_9);
            Unit_getInstance();
          }
          Unit_getInstance();
          return COMPLETING_ALREADY;
        } else {
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
            var tmp2_elvis_lhs_11 = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs_11 == null) {
              var tmp0_also_0_12 = createCauseException($this, cause);
              causeExceptionCache = tmp0_also_0_12;
              tmp_1 = tmp0_also_0_12;
            } else {
              tmp_1 = tmp2_elvis_lhs_11;
            }
            var causeException_10 = tmp_1;
            if (tmp0__anonymous__1._get_isActive__20()) {
              if (tryMakeCancelling($this, tmp0__anonymous__1, causeException_10))
                return COMPLETING_ALREADY;
            } else {
              var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
              if (finalState_13 === COMPLETING_ALREADY) {
                var tmp1_error_0_14 = '' + 'Cannot happen in ' + tmp0__anonymous__1;
                throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_14));
              } else if (finalState_13 === COMPLETING_RETRY) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              } else
                return finalState_13;
            }
          } else {
            return TOO_LATE_TO_CANCEL;
          }
        }
      }
       while (false);
    }
    Unit_getInstance();
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__10();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList_0();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = '' + 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.__state_0.compareAndSet$atomicfu(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return COMPLETING_ALREADY;
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }return COMPLETING_RETRY;
    } else {
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return COMPLETING_RETRY;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    if (finishing._get_isCompleting_())
      return COMPLETING_ALREADY;
    finishing._set_isCompleting_(true);
    if (!(finishing === state)) {
      if (!$this.__state_0.compareAndSet$atomicfu(state, finishing))
        return COMPLETING_RETRY;
    }var wasCancelling_2 = finishing._get_isCancelling_();
    var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver_3 == null)
      null;
    else {
      finishing.addExceptionLocked(tmp0_safe_receiver_3._cause);
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp0_takeIf_0_4 = finishing._get_rootCause_();
    var tmp_0;
    if (!wasCancelling_2) {
      tmp_0 = tmp0_takeIf_0_4;
    } else {
      {
        tmp_0 = null;
      }
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      notifyCancelling($this, list, tmp2_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return COMPLETING_WAITING_CHILDREN;
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull_(_this_, $this) {
    var tmp0_safe_receiver = _this_ instanceof CompletedExceptionally ? _this_ : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__10();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp0__get_asHandler__0 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
      var handle = child_1._childJob.invokeOnCompletion$default_8(false, false, tmp0__get_asHandler__0, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      $this_0 = $this_1;
      state_0 = state_1;
      child_0 = nextChild_0;
      proposedUpdate_0 = proposedUpdate_1;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_7(finalState);
  }
  function nextChild(_this_, $this) {
    var cur = _this_;
    $l$break: while (true) {
      var tmp0__get_isRemoved__0 = cur;
      if (!tmp0__get_isRemoved__0.__removed) {
        break $l$break;
      }var tmp1__get_prevNode__0 = cur;
      cur = tmp1__get_prevNode__0.__prev;
    }
    while (true) {
      var tmp2__get_nextNode__0 = cur;
      cur = tmp2__get_nextNode__0.__next;
      var tmp3__get_isRemoved__0 = cur;
      if (tmp3__get_isRemoved__0.__removed)
        continue;
      else {
      }
      if (cur instanceof ChildHandleNode)
        return cur;
      else {
      }
      if (cur instanceof NodeList_0)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_isCancelling_() ? 'Cancelling' : state._get_isCompleting_() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state._get_isActive__20() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this._list = list;
    this.__isCompleting = atomic_0(isCompleting);
    this.__rootCause = atomic(rootCause);
    this.__exceptionsHolder = atomic(null);
  }
  Finishing.prototype._get_list__10 = function () {
    return this._list;
  };
  Finishing.prototype._set_isCompleting_ = function (value) {
    this.__isCompleting._value_1 = value;
  };
  Finishing.prototype._get_isCompleting_ = function () {
    return this.__isCompleting._value_1;
  };
  Finishing.prototype._set_rootCause_ = function (value) {
    this.__rootCause._value_0 = value;
  };
  Finishing.prototype._get_rootCause_ = function () {
    return this.__rootCause._value_0;
  };
  Finishing.prototype._get_isSealed_ = function () {
    return _get_exceptionsHolder_(this) === SEALED;
  };
  Finishing.prototype._get_isCancelling_ = function () {
    return !(this._get_rootCause_() == null);
  };
  Finishing.prototype._get_isActive__20 = function () {
    return this._get_rootCause_() == null;
  };
  Finishing.prototype.sealLocked = function (proposedException) {
    var eh = _get_exceptionsHolder_(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp0_also_0 = allocateList(this);
        tmp0_also_0.add_16(eh);
        Unit_getInstance();
        tmp = tmp0_also_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause_();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      list.add_8(0, tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals_0(proposedException, rootCause) : false) {
      list.add_16(proposedException);
      Unit_getInstance();
    }_set_exceptionsHolder_(this, SEALED);
    return list;
  };
  Finishing.prototype.addExceptionLocked = function (exception) {
    var rootCause = this._get_rootCause_();
    if (rootCause == null) {
      this._set_rootCause_(exception);
      return Unit_getInstance();
    }if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder_(this);
    if (eh == null)
      _set_exceptionsHolder_(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp0_apply_0 = allocateList(this);
        tmp0_apply_0.add_16(eh);
        Unit_getInstance();
        tmp0_apply_0.add_16(exception);
        Unit_getInstance();
        _set_exceptionsHolder_(this, tmp0_apply_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_16(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return '' + 'Finishing[cancelling=' + this._get_isCancelling_() + ', completing=' + this._get_isCompleting_() + ', rootCause=' + this._get_rootCause_() + ', exceptions=' + _get_exceptionsHolder_(this) + ', list=' + this._list + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this, child._childJob);
    this._parent = parent;
    this._state_1 = state;
    this._child = child;
    this._proposedUpdate = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_69 = function (cause) {
    continueCompleting(this._parent, this._state_1, this._child, this._proposedUpdate);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function JobSupport(active) {
    this.__state_0 = atomic(active ? EMPTY_ACTIVE : EMPTY_NEW);
    this.__parentHandle_0 = atomic(null);
  }
  JobSupport.prototype._get_key__24 = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype._set_parentHandle__7 = function (value) {
    this.__parentHandle_0._value_0 = value;
  };
  JobSupport.prototype._get_parentHandle__7 = function () {
    return this.__parentHandle_0._value_0;
  };
  JobSupport.prototype.initParentJobInternal_7 = function (parent) {
    if (parent == null) {
      this._set_parentHandle__7(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }parent.start_13();
    Unit_getInstance();
    var handle = parent.attachChild_8(this);
    this._set_parentHandle__7(handle);
    if (this._get_isCompleted__8()) {
      handle.dispose_10();
      this._set_parentHandle__7(NonDisposableHandle_getInstance());
    }};
  JobSupport.prototype._get_state__8 = function () {
    var tmp0_loop_0 = this.__state_0;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (!(tmp1__anonymous__1 instanceof OpDescriptor))
        return tmp1__anonymous__1;
      else {
      }
      tmp1__anonymous__1.perform_1(this);
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  JobSupport.prototype._get_isActive__20 = function () {
    var state = this._get_state__8();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state._get_isActive__20();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__8 = function () {
    var tmp = this._get_state__8();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype._get_isCancelled__8 = function () {
    var state = this._get_state__8();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state._get_isCancelling_();
        } else {
          {
            tmp_0 = false;
          }
        }
        tmp = tmp_0;
      }
    }
    return tmp;
  };
  JobSupport.prototype.start_13 = function () {
    while (true) {
      var tmp0__anonymous__1 = this._get_state__8();
      var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1);
      if (tmp0_subject_2 === 0)
        return false;
      else if (tmp0_subject_2 === 1)
        return true;
    }
    Unit_getInstance();
  };
  JobSupport.prototype.onStartInternal_7 = function () {
  };
  JobSupport.prototype.getCancellationException_8 = function () {
    var state = this._get_state__8();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause_();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_7(tmp0_safe_receiver, '' + _get_classSimpleName_(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          var tmp_1 = state._cause;
          tmp = this.toCancellationException$default_7(tmp_1, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException('' + _get_classSimpleName_(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_7 = function (_this__0, message) {
    var tmp0_elvis_lhs = _this__0 instanceof CancellationException ? _this__0 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_elvis_lhs_1 = message;
      tmp = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_7() : tmp0_elvis_lhs_1, _this__0, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_7 = function (_this__0, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_7(_this__0, message);
  };
  JobSupport.prototype.invokeOnCompletion_8 = function (handler) {
    return this.invokeOnCompletion_10(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_10 = function (onCancelling, invokeImmediately, handler) {
    var nodeCache = null;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = this._get_state__8();
        var tmp0_subject_2 = tmp0__anonymous__1;
        if (tmp0_subject_2 instanceof Empty) {
          if (tmp0__anonymous__1._isActive) {
            var tmp1_elvis_lhs_4 = nodeCache;
            var tmp;
            if (tmp1_elvis_lhs_4 == null) {
              var tmp0_also_0_5 = makeNode(this, handler, onCancelling);
              nodeCache = tmp0_also_0_5;
              tmp = tmp0_also_0_5;
            } else {
              tmp = tmp1_elvis_lhs_4;
            }
            var node_3 = tmp;
            if (this.__state_0.compareAndSet$atomicfu(tmp0__anonymous__1, node_3))
              return node_3;
          } else
            promoteEmptyToNodeList(this, tmp0__anonymous__1);
        } else {
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
            var list_6 = tmp0__anonymous__1._get_list__10();
            if (list_6 == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__1 instanceof JobNode ? tmp0__anonymous__1 : THROW_CCE());
            } else {
              var rootCause_7 = null;
              var handle_8 = NonDisposableHandle_getInstance();
              var tmp_0;
              if (onCancelling) {
                tmp_0 = tmp0__anonymous__1 instanceof Finishing;
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                rootCause_7 = tmp0__anonymous__1._get_rootCause_();
                var tmp_1;
                if (rootCause_7 == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !tmp0__anonymous__1._get_isCompleting_();
                  } else {
                    {
                      tmp_2 = false;
                    }
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  var tmp0_elvis_lhs_3_10 = nodeCache;
                  var tmp_3;
                  if (tmp0_elvis_lhs_3_10 == null) {
                    var tmp0_also_0_4_11 = makeNode(this, handler, onCancelling);
                    nodeCache = tmp0_also_0_4_11;
                    tmp_3 = tmp0_also_0_4_11;
                  } else {
                    tmp_3 = tmp0_elvis_lhs_3_10;
                  }
                  var node_2_9 = tmp_3;
                  if (!addLastAtomic(this, tmp0__anonymous__1, list_6, node_2_9)) {
                    tmp$ret$0 = Unit_getInstance();
                    break l$ret$1;
                  }if (rootCause_7 == null)
                    return node_2_9;
                  handle_8 = node_2_9;
                } else {
                }
              } else {
              }
              if (!(rootCause_7 == null)) {
                if (invokeImmediately)
                  invokeIt(handler, rootCause_7);
                return handle_8;
              } else {
                var tmp2_elvis_lhs_13 = nodeCache;
                var tmp_4;
                if (tmp2_elvis_lhs_13 == null) {
                  var tmp1_also_0_14 = makeNode(this, handler, onCancelling);
                  nodeCache = tmp1_also_0_14;
                  tmp_4 = tmp1_also_0_14;
                } else {
                  tmp_4 = tmp2_elvis_lhs_13;
                }
                var node_12 = tmp_4;
                if (addLastAtomic(this, tmp0__anonymous__1, list_6, node_12))
                  return node_12;
              }
            }
          } else {
            {
              if (invokeImmediately) {
                var tmp3_safe_receiver_15 = tmp0__anonymous__1 instanceof CompletedExceptionally ? tmp0__anonymous__1 : null;
                invokeIt(handler, tmp3_safe_receiver_15 == null ? null : tmp3_safe_receiver_15._cause);
              }return NonDisposableHandle_getInstance();
            }
          }
        }
      }
       while (false);
    }
    Unit_getInstance();
  };
  JobSupport.prototype.removeNode_7 = function (node) {
    while (true) {
      var tmp0__anonymous__1 = this._get_state__8();
      var tmp0_subject_2 = tmp0__anonymous__1;
      if (tmp0_subject_2 instanceof JobNode) {
        if (!(tmp0__anonymous__1 === node))
          return Unit_getInstance();
        if (this.__state_0.compareAndSet$atomicfu(tmp0__anonymous__1, EMPTY_ACTIVE))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
          if (!(tmp0__anonymous__1._get_list__10() == null)) {
            node.remove_19();
            Unit_getInstance();
          }return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
    Unit_getInstance();
  };
  JobSupport.prototype._get_onCancelComplete__7 = function () {
    return false;
  };
  JobSupport.prototype.cancel_16 = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_defaultCancellationException_0 = null;
      var tmp1_defaultCancellationException_0 = null;
      var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
      tmp = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_7() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_12(tmp);
  };
  JobSupport.prototype.cancellationExceptionMessage_7 = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.cancelInternal_12 = function (cause) {
    this.cancelImpl_7(cause);
    Unit_getInstance();
  };
  JobSupport.prototype.parentCancelled_9 = function (parentJob) {
    this.cancelImpl_7(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_10 = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_7(cause) ? this._get_handlesException__7() : false;
  };
  JobSupport.prototype.cancelCoroutine_1 = function (cause) {
    return this.cancelImpl_7(cause);
  };
  JobSupport.prototype.cancelImpl_7 = function (cause) {
    var finalState = COMPLETING_ALREADY;
    if (this._get_onCancelComplete__7()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === COMPLETING_WAITING_CHILDREN)
        return true;
    }if (finalState === COMPLETING_ALREADY) {
      finalState = makeCancelling(this, cause);
    }var tmp;
    if (finalState === COMPLETING_ALREADY) {
      tmp = true;
    } else if (finalState === COMPLETING_WAITING_CHILDREN) {
      tmp = true;
    } else if (finalState === TOO_LATE_TO_CANCEL) {
      tmp = false;
    } else {
      this.afterCompletion_7(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.getChildJobCancellationCause_8 = function () {
    var state = this._get_state__8();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_rootCause_();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state._cause;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = '' + 'Cannot be cancelling child in this state: ' + state;
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('' + 'Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompletingOnce_5 = function (proposedUpdate) {
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = this._get_state__8();
        var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1, proposedUpdate);
        if (finalState_2 === COMPLETING_ALREADY)
          throw IllegalStateException_init_$Create$_0('' + 'Job ' + this + ' is already complete or completing, ' + ('' + 'but is being completed with ' + proposedUpdate), _get_exceptionOrNull_(proposedUpdate, this));
        else if (finalState_2 === COMPLETING_RETRY) {
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        } else
          return finalState_2;
      }
       while (false);
    }
    Unit_getInstance();
  };
  JobSupport.prototype.attachChild_8 = function (child) {
    var tmp0__get_asHandler__0 = new ChildHandleNode(this, child);
    var tmp = this.invokeOnCompletion$default_8(true, false, tmp0__get_asHandler__0, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_7 = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_7 = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__7 = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__7 = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_7 = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_7 = function (state) {
  };
  JobSupport.prototype.afterCompletion_7 = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return '' + this.toDebugString_7() + '@' + _get_hexAddress_(this);
  };
  JobSupport.prototype.toDebugString_7 = function () {
    return '' + this.nameString_8() + '{' + stateString(this, this._get_state__8()) + '}';
  };
  JobSupport.prototype.nameString_8 = function () {
    return _get_classSimpleName_(this);
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this_) {
    var tmp;
    if (!(_this_ == null) ? isInterface(_this_, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this_);
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  function JobCancellingNode(job) {
    JobNode.call(this, job);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function InactiveNodeList(list) {
    this._list_0 = list;
  }
  InactiveNodeList.prototype._get_list__10 = function () {
    return this._list_0;
  };
  InactiveNodeList.prototype._get_isActive__20 = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return DEBUG ? this._list_0.getString('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(parent, childJob) {
    JobCancellingNode.call(this, parent);
    this._childJob = childJob;
  }
  ChildHandleNode.prototype.invoke_69 = function (cause) {
    return this._childJob.parentCancelled_9(this._get_job__15());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  ChildHandleNode.prototype.childCancelled_10 = function (cause) {
    return this._get_job__15().childCancelled_10(cause);
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function InvokeOnCancelling(job, handler) {
    JobCancellingNode.call(this, job);
    this._handler_0 = handler;
    this.__invoked = atomic_1(0);
  }
  InvokeOnCancelling.prototype.invoke_69 = function (cause) {
    if (this.__invoked.compareAndSet$atomicfu(0, 1))
      this._handler_0(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCompletion(job, handler) {
    JobNode.call(this, job);
    this._handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_69 = function (cause) {
    return this._handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function unboxState(_this_) {
    var tmp0_safe_receiver = _this_ instanceof IncompleteStateBox ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._state_2;
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this._state_2 = state;
  }
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(parent, child) {
    JobCancellingNode.call(this, parent);
    this._child_0 = child;
  }
  ChildContinuation.prototype.invoke_69 = function (cause) {
    this._child_0.parentCancelled_2(this._child_0.getContinuationCancellationCause(this._get_job__15()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  function handlesException($this) {
    var tmp = $this._get_parentHandle__7();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_job__15();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob._get_handlesException__7())
        return true;
      var tmp_1 = parentJob._get_parentHandle__7();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver._get_job__15();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJobInternal_7(parent);
    this._handlesException = handlesException(this);
  }
  JobImpl.prototype._get_onCancelComplete__7 = function () {
    return true;
  };
  JobImpl.prototype._get_handlesException__7 = function () {
    return this._handlesException;
  };
  JobImpl.$metadata$ = {
    simpleName: 'JobImpl',
    kind: 'class',
    interfaces: [CompletableJob]
  };
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0();
    return tmp0_elvis_lhs == null ? '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_0 = function () {
    var main_0 = Dispatchers_getInstance()._Main;
    if (this === main_0)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main_0._get_immediate__0();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {
    simpleName: 'MainCoroutineDispatcher',
    kind: 'class',
    interfaces: []
  };
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.childCancelled_10 = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = {
    simpleName: 'SupervisorJobImpl',
    kind: 'class',
    interfaces: []
  };
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.isDispatchNeeded_8 = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_8 = function (context, block) {
    var yieldContext = context.get_39(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined__error = true;
      return Unit_getInstance();
    }throw UnsupportedOperationException_init_$Create$_0('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {
    simpleName: 'Unconfined',
    kind: 'object',
    interfaces: []
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_3;
  function Key_getInstance_3() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  var EMPTY;
  var OFFER_SUCCESS;
  var OFFER_FAILED;
  var POLL_FAILED;
  var HANDLER_INVOKED;
  function receiveSuspend($this, receiveMode, $cont) {
    var tmp0__anonymous__1_1 = $cont;
    var cancellable_2_2 = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__1_1));
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if ($this._get_onUndeliveredElement__4() == null) {
        tmp = new ReceiveElement(isInterface(cancellable_2_2, CancellableContinuation) ? cancellable_2_2 : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable_2_2, CancellableContinuation) ? cancellable_2_2 : THROW_CCE(), receiveMode, $this._get_onUndeliveredElement__4());
      }
      var receive_4 = tmp;
      while (true) {
        if (enqueueReceive($this, receive_4)) {
          removeReceiveOnCancel($this, cancellable_2_2, receive_4);
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        }var result_5 = $this.pollInternal_3();
        if (result_5 instanceof Closed) {
          receive_4.resumeReceiveClosed_1(result_5);
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        } else {
        }
        if (!(result_5 === POLL_FAILED)) {
          var tmp_0 = cancellable_2_2;
          var tmp_1 = receive_4.resumeValue_0((result_5 == null ? true : isObject(result_5)) ? result_5 : THROW_CCE());
          tmp_0.resume_0(tmp_1, receive_4.resumeOnCancellationFun_1((result_5 == null ? true : isObject(result_5)) ? result_5 : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        }}
    }
     while (false);
    return cancellable_2_2.getResult();
  }
  function enqueueReceive($this, receive) {
    var tmp0_also_0 = $this.enqueueReceiveInternal_3(receive);
    if (tmp0_also_0)
      $this.onReceiveEnqueued_3();
    return tmp0_also_0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp0__get_asHandler__0 = new RemoveReceiveOnCancel($this, receive);
    return cont.invokeOnCancellation_0(tmp0__get_asHandler__0);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this._$this_4 = $outer;
    BeforeResumeCancelHandler.call(this);
    this._receive = receive;
  }
  RemoveReceiveOnCancel.prototype.invoke_69 = function (cause) {
    if (this._receive.remove_19())
      this._$this_4.onReceiveDequeued_3();
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.invoke_69(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return '' + 'RemoveReceiveOnCancel[' + this._receive + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = {
    simpleName: 'RemoveReceiveOnCancel',
    kind: 'class',
    interfaces: []
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this._cont = cont;
    this._receiveMode = receiveMode;
  }
  ReceiveElement.prototype._get_cont__0 = function () {
    return this._cont;
  };
  ReceiveElement.prototype.resumeValue_0 = function (value) {
    var tmp0_subject = this._receiveMode;
    var tmp;
    if (tmp0_subject === 2) {
      var tmp0_value_0 = Companion_getInstance_8();
      tmp = new ValueOrClosed(_ValueOrClosed___init__impl_(value));
    } else {
      tmp = value;
    }
    return tmp;
  };
  ReceiveElement.prototype.tryResumeReceive_3 = function (value, otherOp) {
    var tmp = this.resumeValue_0(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this._cont.tryResume_0(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.desc__error, this.resumeOnCancellationFun_1(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.finishPrepare__error();
      Unit_getInstance();
    }
    Unit_getInstance();
    return RESUME_TOKEN;
  };
  ReceiveElement.prototype.completeResumeReceive_3 = function (value) {
    return this._cont.completeResume_0(RESUME_TOKEN);
  };
  ReceiveElement.prototype.resumeReceiveClosed_1 = function (closed) {
    if (this._receiveMode === 1 ? closed._closeCause == null : false) {
      var tmp0_resume_0 = this._cont;
      var tmp1_resume_0 = null;
      var tmp0_success_0_1 = Companion_getInstance_2();
      tmp0_resume_0.resumeWith_27(_Result___init__impl_(tmp1_resume_0));
    } else if (this._receiveMode === 2) {
      var tmp4_resume_0 = this._cont;
      var tmp2_closed_0 = Companion_getInstance_8();
      var tmp3_closed_0 = closed._closeCause;
      var tmp5_resume_0 = _ValueOrClosed___init__impl_(new Closed_0(tmp3_closed_0));
      var tmp0_success_0_1_0 = Companion_getInstance_2();
      tmp4_resume_0.resumeWith_27(_Result___init__impl_(new ValueOrClosed(tmp5_resume_0)));
    } else {
      var tmp6_resumeWithException_0 = this._cont;
      var tmp7_resumeWithException_0 = closed._get_receiveException_();
      var tmp0_failure_0_1 = Companion_getInstance_2();
      tmp6_resumeWithException_0.resumeWith_27(_Result___init__impl_(createFailure(tmp7_resumeWithException_0)));
    }
  };
  ReceiveElement.prototype.toString = function () {
    return '' + 'ReceiveElement@' + _get_hexAddress_(this) + '[receiveMode=' + this._receiveMode + ']';
  };
  ReceiveElement.$metadata$ = {
    simpleName: 'ReceiveElement',
    kind: 'class',
    interfaces: []
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this._onUndeliveredElement = onUndeliveredElement;
  }
  ReceiveElementWithUndeliveredHandler.prototype.resumeOnCancellationFun_1 = function (value) {
    return bindCancellationFun(this._onUndeliveredElement, value, this._get_cont__0()._get_context__47());
  };
  ReceiveElementWithUndeliveredHandler.$metadata$ = {
    simpleName: 'ReceiveElementWithUndeliveredHandler',
    kind: 'class',
    interfaces: []
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.pollInternal_3 = function () {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstSendOrPeekClosed_4();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return POLL_FAILED;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.tryResumeSend_1(null);
      if (!(token == null)) {
        send.completeResumeSend_1();
        return send._get_pollResult__1();
      }send.undeliveredElement_1();
    }
  };
  AbstractChannel.prototype._get_isClosedForReceive__6 = function () {
    return !(this._get_closedForReceive__4() == null) ? this._get_isBufferEmpty__3() : false;
  };
  AbstractChannel.prototype.enqueueReceiveInternal_3 = function (receive) {
    var tmp;
    if (this._get_isBufferAlwaysEmpty__3()) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0_addLastIfPrev_0 = this._get_queue__4();
        var tmp1__anonymous__1 = tmp0_addLastIfPrev_0.__prev;
        if (!!(tmp1__anonymous__1 instanceof Send)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
        tmp0_addLastIfPrev_0.addLast_22(receive);
        tmp$ret$0 = true;
      }
       while (false);
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$2;
      l$ret$3: do {
        var tmp2_addLastIfPrevAndIf_0 = this._get_queue__4();
        var tmp3__anonymous__1 = tmp2_addLastIfPrevAndIf_0.__prev;
        if (!!(tmp3__anonymous__1 instanceof Send)) {
          tmp$ret$2 = false;
          break l$ret$3;
        } else {
        }
        if (!this._get_isBufferEmpty__3()) {
          tmp$ret$2 = false;
          break l$ret$3;
        } else {
        }
        tmp2_addLastIfPrevAndIf_0.addLast_22(receive);
        tmp$ret$2 = true;
      }
       while (false);
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  AbstractChannel.prototype.receiveOrClosed_7 = function ($cont) {
    var result = this.pollInternal_3();
    if (!(result === POLL_FAILED)) {
      var tmp;
      if (result instanceof Closed) {
        var tmp0_closed_0 = Companion_getInstance_8();
        var tmp1_closed_0 = result._closeCause;
        tmp = _ValueOrClosed___init__impl_(new Closed_0(tmp1_closed_0));
      } else {
        {
          var tmp2_value_0 = Companion_getInstance_8();
          var tmp3_value_0 = (result == null ? true : isObject(result)) ? result : THROW_CCE();
          tmp = _ValueOrClosed___init__impl_(tmp3_value_0);
        }
      }
      return tmp;
    }var tmp_0 = receiveSuspend(this, 2, $cont);
    if (tmp_0 === _get_COROUTINE_SUSPENDED_())
      return tmp_0;
    return tmp_0._holder;
  };
  AbstractChannel.prototype.cancel_16 = function (cause) {
    if (this._get_isClosedForReceive__6())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.cancelInternal_11(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('' + _get_classSimpleName_(this) + ' was cancelled') : tmp0_elvis_lhs);
    Unit_getInstance();
  };
  AbstractChannel.prototype.cancelInternal_11 = function (cause) {
    var tmp0_also_0 = this.close_9(cause);
    this.onCancelIdempotent_3(tmp0_also_0);
    return tmp0_also_0;
  };
  AbstractChannel.prototype.onCancelIdempotent_3 = function (wasClosed) {
    var tmp0_elvis_lhs = this._get_closedForSend__4();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error_0 = 'Cannot happen';
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__0(null, 1, null);
    $l$break: while (true) {
      var previous = closed.__prev;
      if (previous instanceof LinkedListHead) {
        break $l$break;
      } else {
      }
      if (!previous.remove_19()) {
        previous.helpRemove_18();
        continue $l$break;
      }var tmp_0 = list;
      list = InlineList__plus_impl(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    var tmp$ret$0;
    l$ret$1: do {
      var tmp1_forEachReversed_0 = list;
      var tmp0_subject_1 = _get_holder__0(tmp1_forEachReversed_0);
      if (tmp0_subject_1 == null) {
        tmp$ret$0 = Unit_getInstance();
        break l$ret$1;
      } else {
        if (!(tmp0_subject_1 instanceof ArrayList)) {
          var tmp_1 = _get_holder__0(tmp1_forEachReversed_0);
          var tmp2__anonymous__5 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp2__anonymous__5.resumeSendClosed_1(closed);
        } else {
          {
            var tmp_2 = _get_holder__0(tmp1_forEachReversed_0);
            var list_2 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
            var inductionVariable = list_2._get_size__22() - 1 | 0;
            if (0 <= inductionVariable)
              do {
                var i_4 = inductionVariable;
                inductionVariable = inductionVariable + -1 | 0;
                var tmp3__anonymous__5 = list_2.get_51(i_4);
                tmp3__anonymous__5.resumeSendClosed_1(closed);
              }
               while (0 <= inductionVariable);
          }
        }
      }
    }
     while (false);
  };
  AbstractChannel.prototype.takeFirstReceiveOrPeekClosed_4 = function () {
    var tmp0_also_0 = AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed_4.call(this);
    var tmp;
    if (!(tmp0_also_0 == null)) {
      tmp = !(tmp0_also_0 instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp)
      this.onReceiveDequeued_3();
    else {
    }
    return tmp0_also_0;
  };
  AbstractChannel.prototype.onReceiveEnqueued_3 = function () {
  };
  AbstractChannel.prototype.onReceiveDequeued_3 = function () {
  };
  AbstractChannel.$metadata$ = {
    simpleName: 'AbstractChannel',
    kind: 'class',
    interfaces: [Channel]
  };
  function helpCloseAndGetSendException($this, element, closed) {
    helpClose($this, closed);
    var tmp0_safe_receiver = $this._onUndeliveredElement_0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      addSuppressed(tmp1_safe_receiver, closed._get_sendException_());
      throw tmp1_safe_receiver;
    }
    Unit_getInstance();
    return closed._get_sendException_();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this._onCloseHandler._value_0;
    if ((!(handler === null) ? !(handler === HANDLER_INVOKED) : false) ? $this._onCloseHandler.compareAndSet$atomicfu(handler, HANDLER_INVOKED) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }}
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__0(null, 1, null);
    $l$break: while (true) {
      var tmp = closed.__prev;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$break;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.remove_19()) {
        previous.helpRemove_18();
        continue $l$break;
      }closedList = InlineList__plus_impl(closedList, previous);
    }
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_forEachReversed_0 = closedList;
      var tmp0_subject_1 = _get_holder__0(tmp0_forEachReversed_0);
      if (tmp0_subject_1 == null) {
        tmp$ret$0 = Unit_getInstance();
        break l$ret$1;
      } else {
        if (!(tmp0_subject_1 instanceof ArrayList)) {
          var tmp_1 = _get_holder__0(tmp0_forEachReversed_0);
          var tmp1__anonymous__5 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__5.resumeReceiveClosed_1(closed);
        } else {
          {
            var tmp_2 = _get_holder__0(tmp0_forEachReversed_0);
            var list_2 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
            var inductionVariable = list_2._get_size__22() - 1 | 0;
            if (0 <= inductionVariable)
              do {
                var i_4 = inductionVariable;
                inductionVariable = inductionVariable + -1 | 0;
                var tmp2__anonymous__5 = list_2.get_51(i_4);
                tmp2__anonymous__5.resumeReceiveClosed_1(closed);
              }
               while (0 <= inductionVariable);
          }
        }
      }
    }
     while (false);
    $this.onClosedIdempotent_4(closed);
  }
  function _get_queueDebugStateString_($this) {
    var tmp0__get_nextNode__0 = $this._queue;
    var head = tmp0__get_nextNode__0.__next;
    if (head === $this._queue)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_1(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          {
            tmp = '' + 'UNEXPECTED:' + head;
          }
        }
      }
    }
    var result = tmp;
    var tmp1__get_prevNode__0 = $this._queue;
    var tail = tmp1__get_prevNode__0.__prev;
    if (!(tail === head)) {
      result = result + ('' + ',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + ('' + ',closedForSend=' + tail);
      else {
      }
    }return result;
  }
  function countQueueSize($this) {
    var size_0 = 0;
    var tmp0_forEach_0 = $this._queue;
    var cur_1 = tmp0_forEach_0._get__next__2();
    while (!equals_0(cur_1, tmp0_forEach_0)) {
      if (cur_1 instanceof LinkedListNode) {
        var tmp1__anonymous__2 = cur_1;
        var tmp0_3 = size_0;
        size_0 = tmp0_3 + 1 | 0;
        Unit_getInstance();
      } else {
      }
      cur_1 = cur_1.__next;
    }
    return size_0;
  }
  function SendBuffered(element) {
    Send.call(this);
    this._element_0 = element;
  }
  SendBuffered.prototype._get_pollResult__1 = function () {
    return this._element_0;
  };
  SendBuffered.prototype.tryResumeSend_1 = function (otherOp) {
    var tmp0_also_0 = RESUME_TOKEN;
    var tmp0_safe_receiver_2 = otherOp;
    if (tmp0_safe_receiver_2 == null)
      null;
    else {
      tmp0_safe_receiver_2.finishPrepare__error();
      Unit_getInstance();
    }
    Unit_getInstance();
    return tmp0_also_0;
  };
  SendBuffered.prototype.completeResumeSend_1 = function () {
  };
  SendBuffered.prototype.resumeSendClosed_1 = function (closed) {
  };
  SendBuffered.prototype.toString = function () {
    return '' + 'SendBuffered@' + _get_hexAddress_(this) + '(' + this._element_0 + ')';
  };
  SendBuffered.$metadata$ = {
    simpleName: 'SendBuffered',
    kind: 'class',
    interfaces: []
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this._onUndeliveredElement_0 = onUndeliveredElement;
    this._queue = new LinkedListHead();
    this._onCloseHandler = atomic(null);
  }
  AbstractSendChannel.prototype._get_onUndeliveredElement__4 = function () {
    return this._onUndeliveredElement_0;
  };
  AbstractSendChannel.prototype._get_queue__4 = function () {
    return this._queue;
  };
  AbstractSendChannel.prototype.offerInternal_4 = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstReceiveOrPeekClosed_4();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return OFFER_FAILED;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.tryResumeReceive_3(element, null);
      if (!(token == null)) {
        receive.completeResumeReceive_3(element);
        return receive._get_offerResult__3();
      }}
  };
  AbstractSendChannel.prototype._get_closedForSend__4 = function () {
    var tmp0__get_prevNode__0 = this._queue;
    var tmp = tmp0__get_prevNode__0.__prev;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype._get_closedForReceive__4 = function () {
    var tmp0__get_nextNode__0 = this._queue;
    var tmp = tmp0__get_nextNode__0.__next;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.takeFirstSendOrPeekClosed_4 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf_0 = this._queue;
      var next_1 = tmp1_removeFirstIfIsInstanceOfOrPeekIf_0.__next;
      if (next_1 === tmp1_removeFirstIfIsInstanceOfOrPeekIf_0) {
        tmp$ret$0 = null;
        break l$ret$1;
      }if (!(next_1 instanceof Send)) {
        tmp$ret$0 = null;
        break l$ret$1;
      } else {
      }
      var tmp2__anonymous__3 = next_1;
      if (tmp2__anonymous__3 instanceof Closed) {
        tmp$ret$0 = next_1;
        break l$ret$1;
      } else {
      }
      var tmp0_check_0 = next_1.remove_19();
      if (!tmp0_check_0) {
        var message_1 = 'Should remove';
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      }tmp$ret$0 = next_1;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.sendBuffered_0 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_addLastIfPrev_0 = this._queue;
      var tmp1_addLastIfPrev_0 = new SendBuffered(element);
      var tmp2__anonymous__1 = tmp0_addLastIfPrev_0.__prev;
      if (isInterface(tmp2__anonymous__1, ReceiveOrClosed))
        return tmp2__anonymous__1;
      else {
      }
      if (!true) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      tmp0_addLastIfPrev_0.addLast_22(tmp1_addLastIfPrev_0);
      tmp$ret$0 = true;
    }
     while (false);
    Unit_getInstance();
    return null;
  };
  AbstractSendChannel.prototype._get_isClosedForSend__8 = function () {
    return !(this._get_closedForSend__4() == null);
  };
  AbstractSendChannel.prototype.offer_8 = function (element) {
    var result = this.offerInternal_4(element);
    var tmp;
    if (result === OFFER_SUCCESS) {
      tmp = true;
    } else {
      if (result === OFFER_FAILED) {
        var tmp0_elvis_lhs = this._get_closedForSend__4();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        throw recoverStackTrace_0(helpCloseAndGetSendException(this, element, tmp_0));
      } else {
        if (result instanceof Closed) {
          throw recoverStackTrace_0(helpCloseAndGetSendException(this, element, result));
        } else {
          {
            var tmp0_error_0 = '' + 'offerInternal returned ' + result;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
          }
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.close_9 = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_addLastIfPrev_0 = this._queue;
      var tmp1__anonymous__1 = tmp0_addLastIfPrev_0.__prev;
      if (!!(tmp1__anonymous__1 instanceof Closed)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      tmp0_addLastIfPrev_0.addLast_22(closed);
      tmp$ret$0 = true;
    }
     while (false);
    var closeAdded = tmp$ret$0;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp2__get_prevNode__0 = this._queue;
      var tmp_0 = tmp2__get_prevNode__0.__prev;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded)
      invokeOnCloseHandler(this, cause);
    return closeAdded;
  };
  AbstractSendChannel.prototype.invokeOnClose_8 = function (handler) {
    if (!this._onCloseHandler.compareAndSet$atomicfu(null, handler)) {
      var value = this._onCloseHandler._value_0;
      if (value === HANDLER_INVOKED) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }throw IllegalStateException_init_$Create$('' + 'Another handler was already registered: ' + value);
    } else {
      var closedToken = this._get_closedForSend__4();
      if (!(closedToken == null) ? this._onCloseHandler.compareAndSet$atomicfu(handler, HANDLER_INVOKED) : false) {
        handler(closedToken._closeCause);
      }}
  };
  AbstractSendChannel.prototype.onClosedIdempotent_4 = function (closed) {
  };
  AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed_4 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf_0 = this._queue;
      var next_1 = tmp1_removeFirstIfIsInstanceOfOrPeekIf_0.__next;
      if (next_1 === tmp1_removeFirstIfIsInstanceOfOrPeekIf_0) {
        tmp$ret$0 = null;
        break l$ret$1;
      }if (!isInterface(next_1, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break l$ret$1;
      } else {
      }
      var tmp2__anonymous__3 = next_1;
      if (tmp2__anonymous__3 instanceof Closed) {
        tmp$ret$0 = next_1;
        break l$ret$1;
      } else {
      }
      var tmp0_check_0 = next_1.remove_19();
      if (!tmp0_check_0) {
        var message_1 = 'Should remove';
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      }tmp$ret$0 = next_1;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + '{' + _get_queueDebugStateString_(this) + '}' + this._get_bufferDebugString__4();
  };
  AbstractSendChannel.prototype._get_bufferDebugString__4 = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = {
    simpleName: 'AbstractSendChannel',
    kind: 'class',
    interfaces: [SendChannel]
  };
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.undeliveredElement_1 = function () {
  };
  Send.$metadata$ = {
    simpleName: 'Send',
    kind: 'class',
    interfaces: []
  };
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = {
    simpleName: 'ReceiveOrClosed',
    kind: 'interface',
    interfaces: []
  };
  function Closed(closeCause) {
    Send.call(this);
    this._closeCause = closeCause;
  }
  Closed.prototype._get_sendException_ = function () {
    var tmp0_elvis_lhs = this._closeCause;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  Closed.prototype._get_receiveException_ = function () {
    var tmp0_elvis_lhs = this._closeCause;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  Closed.prototype._get_offerResult__3 = function () {
    return this;
  };
  Closed.prototype._get_pollResult__1 = function () {
    return this;
  };
  Closed.prototype.tryResumeSend_1 = function (otherOp) {
    var tmp0_also_0 = RESUME_TOKEN;
    var tmp0_safe_receiver_2 = otherOp;
    if (tmp0_safe_receiver_2 == null)
      null;
    else {
      tmp0_safe_receiver_2.finishPrepare__error();
      Unit_getInstance();
    }
    Unit_getInstance();
    return tmp0_also_0;
  };
  Closed.prototype.completeResumeSend_1 = function () {
  };
  Closed.prototype.tryResumeReceive_3 = function (value, otherOp) {
    var tmp0_also_0 = RESUME_TOKEN;
    var tmp0_safe_receiver_2 = otherOp;
    if (tmp0_safe_receiver_2 == null)
      null;
    else {
      tmp0_safe_receiver_2.finishPrepare__error();
      Unit_getInstance();
    }
    Unit_getInstance();
    return tmp0_also_0;
  };
  Closed.prototype.completeResumeReceive_3 = function (value) {
  };
  Closed.prototype.resumeSendClosed_1 = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return '' + 'Closed@' + _get_hexAddress_(this) + '[' + this._closeCause + ']';
  };
  Closed.$metadata$ = {
    simpleName: 'Closed',
    kind: 'class',
    interfaces: [ReceiveOrClosed]
  };
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype._get_offerResult__3 = function () {
    return OFFER_SUCCESS;
  };
  Receive.prototype.resumeOnCancellationFun_1 = function (value) {
    return null;
  };
  Receive.$metadata$ = {
    simpleName: 'Receive',
    kind: 'class',
    interfaces: [ReceiveOrClosed]
  };
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this._capacity) {
      $this._size_0._value_2 = currentSize + 1 | 0;
      return null;
    }var tmp0_subject = $this._onBufferOverflow;
    var tmp;
    if (tmp0_subject.equals(BufferOverflow_SUSPEND_getInstance())) {
      tmp = OFFER_FAILED;
    } else if (tmp0_subject.equals(BufferOverflow_DROP_LATEST_getInstance())) {
      tmp = OFFER_SUCCESS;
    } else if (tmp0_subject.equals(BufferOverflow_DROP_OLDEST_getInstance())) {
      tmp = null;
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this._capacity) {
      ensureCapacity($this, currentSize);
      $this._buffer[($this._head_0 + currentSize | 0) % $this._buffer.length] = element;
    } else {
      $this._buffer[$this._head_0 % $this._buffer.length] = null;
      $this._buffer[($this._head_0 + currentSize | 0) % $this._buffer.length] = element;
      $this._head_0 = ($this._head_0 + 1 | 0) % $this._buffer.length;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this._buffer.length) {
      var tmp0_min_0 = imul($this._buffer.length, 2);
      var tmp1_min_0 = $this._capacity;
      var newSize = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_min_0, tmp1_min_0]))));
      }.call(this);
      var newBuffer = fillArrayVal(Array(newSize), null);
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this._buffer[($this._head_0 + i | 0) % $this._buffer.length];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, EMPTY, currentSize, newSize);
      $this._buffer = newBuffer;
      $this._head_0 = 0;
    }}
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this._capacity = capacity;
    this._onBufferOverflow = onBufferOverflow;
    var tmp0_require_0 = this._capacity >= 1;
    if (!tmp0_require_0) {
      var message_1 = '' + 'ArrayChannel capacity must be at least 1, but ' + this._capacity + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString_1(message_1));
    }this._lock = new NoOpLock();
    var tmp = this;
    var tmp0_min_0 = this._capacity;
    var tmp1_min_0 = 8;
    var tmp2_arrayOfNulls_0 = function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_min_0, tmp1_min_0]))));
    }.call(this);
    var tmp3_apply_0 = fillArrayVal(Array(tmp2_arrayOfNulls_0), null);
    fill$default(tmp3_apply_0, EMPTY, 0, 0, 6, null);
    tmp._buffer = tmp3_apply_0;
    this._head_0 = 0;
    this._size_0 = atomic_1(0);
  }
  ArrayChannel.prototype._get_isBufferAlwaysEmpty__3 = function () {
    return false;
  };
  ArrayChannel.prototype._get_isBufferEmpty__3 = function () {
    return this._size_0._value_2 === 0;
  };
  ArrayChannel.prototype._get_isClosedForReceive__6 = function () {
    var tmp0_withLock_0 = this._lock;
    return AbstractChannel.prototype._get_isClosedForReceive__6.call(this);
  };
  ArrayChannel.prototype.offerInternal_4 = function (element) {
    var receive = null;
    var tmp0_withLock_0 = this._lock;
    var tmp$ret$0;
    l$ret$1: do {
      var size_2 = this._size_0._value_2;
      var tmp0_safe_receiver_3 = this._get_closedForSend__4();
      if (tmp0_safe_receiver_3 == null)
        null;
      else {
        return tmp0_safe_receiver_3;
      }
      Unit_getInstance();
      var tmp1_safe_receiver_4 = updateBufferSize(this, size_2);
      if (tmp1_safe_receiver_4 == null)
        null;
      else {
        return tmp1_safe_receiver_4;
      }
      Unit_getInstance();
      if (size_2 === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs_5 = this.takeFirstReceiveOrPeekClosed_4();
          var tmp;
          if (tmp2_elvis_lhs_5 == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs_5;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this._size_0._value_2 = size_2;
            return ensureNotNull(receive);
          } else {
          }
          var token_6 = ensureNotNull(receive).tryResumeReceive_3(element, null);
          if (!(token_6 == null)) {
            this._size_0._value_2 = size_2;
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }}
      }enqueueElement(this, size_2, element);
      return OFFER_SUCCESS;
    }
     while (false);
    ensureNotNull(receive).completeResumeReceive_3(element);
    return ensureNotNull(receive)._get_offerResult__3();
  };
  ArrayChannel.prototype.pollInternal_3 = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp0_withLock_0 = this._lock;
    var size_2 = this._size_0._value_2;
    if (size_2 === 0) {
      var tmp0_elvis_lhs_3 = this._get_closedForSend__4();
      return tmp0_elvis_lhs_3 == null ? POLL_FAILED : tmp0_elvis_lhs_3;
    }result = this._buffer[this._head_0];
    this._buffer[this._head_0] = null;
    this._size_0._value_2 = size_2 - 1 | 0;
    var replacement_4 = POLL_FAILED;
    if (size_2 === this._capacity) {
      loop: while (true) {
        var tmp1_elvis_lhs_5 = this.takeFirstSendOrPeekClosed_4();
        var tmp;
        if (tmp1_elvis_lhs_5 == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs_5;
        }
        send = tmp;
        var token_6 = ensureNotNull(send).tryResumeSend_1(null);
        if (!(token_6 == null)) {
          resumed = true;
          replacement_4 = ensureNotNull(send)._get_pollResult__1();
          break loop;
        }ensureNotNull(send).undeliveredElement_1();
      }
    }var tmp_0;
    if (!(replacement_4 === POLL_FAILED)) {
      tmp_0 = !(replacement_4 instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this._size_0._value_2 = size_2;
      this._buffer[(this._head_0 + size_2 | 0) % this._buffer.length] = replacement_4;
    } else {
    }
    this._head_0 = (this._head_0 + 1 | 0) % this._buffer.length;
    if (resumed)
      ensureNotNull(send).completeResumeSend_1();
    return result;
  };
  ArrayChannel.prototype.enqueueReceiveInternal_3 = function (receive) {
    var tmp0_withLock_0 = this._lock;
    return AbstractChannel.prototype.enqueueReceiveInternal_3.call(this, receive);
  };
  ArrayChannel.prototype.onCancelIdempotent_3 = function (wasClosed) {
    var onUndeliveredElement = this._get_onUndeliveredElement__4();
    var undeliveredElementException = null;
    var tmp0_withLock_0 = this._lock;
    var tmp0_repeat_0_2 = this._size_0._value_2;
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat_0_2)
      do {
        var index_2_4 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var value_4_5 = this._buffer[this._head_0];
        if (!(onUndeliveredElement == null) ? !(value_4_5 === EMPTY) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value_4_5 == null ? true : isObject(value_4_5)) ? value_4_5 : THROW_CCE(), undeliveredElementException);
        }this._buffer[this._head_0] = EMPTY;
        this._head_0 = (this._head_0 + 1 | 0) % this._buffer.length;
      }
       while (inductionVariable < tmp0_repeat_0_2);
    this._size_0._value_2 = 0;
    AbstractChannel.prototype.onCancelIdempotent_3.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      throw tmp0_safe_receiver;
    }
    Unit_getInstance();
  };
  ArrayChannel.prototype._get_bufferDebugString__4 = function () {
    return '' + '(buffer:capacity=' + this._capacity + ',size=' + this._size_0._value_2 + ')';
  };
  ArrayChannel.$metadata$ = {
    simpleName: 'ArrayChannel',
    kind: 'class',
    interfaces: []
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = {
    simpleName: 'BufferOverflow',
    kind: 'class',
    interfaces: []
  };
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this._UNLIMITED = 2147483647;
    this._RENDEZVOUS = 0;
    this._CONFLATED = -1;
    this._BUFFERED = -2;
    this._OPTIONAL_CHANNEL = -3;
    this._DEFAULT_BUFFER_PROPERTY_NAME = 'kotlinx.coroutines.channels.defaultBuffer';
    this._CHANNEL_DEFAULT_CAPACITY = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.$metadata$ = {
    simpleName: 'Factory',
    kind: 'object',
    interfaces: []
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  Channel.$metadata$ = {
    simpleName: 'Channel',
    kind: 'interface',
    interfaces: [SendChannel, ReceiveChannel]
  };
  function ReceiveChannel() {
  }
  ReceiveChannel.$metadata$ = {
    simpleName: 'ReceiveChannel',
    kind: 'interface',
    interfaces: []
  };
  function SendChannel() {
  }
  SendChannel.prototype.close$default_7 = function (cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.close_9(cause) : $handler(cause);
  };
  SendChannel.$metadata$ = {
    simpleName: 'SendChannel',
    kind: 'interface',
    interfaces: []
  };
  function _ValueOrClosed___init__impl_(holder) {
    return holder;
  }
  function _get_holder_($this) {
    return $this;
  }
  function _ValueOrClosed___get_isClosed__impl_(this_0) {
    var tmp = _get_holder_(this_0);
    return tmp instanceof Closed_0;
  }
  function _ValueOrClosed___get_value__impl_(this_0) {
    var tmp;
    var tmp_0 = _get_holder_(this_0);
    if (tmp_0 instanceof Closed_0) {
      var tmp0_error_0 = 'Channel was closed';
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    } else {
      {
        var tmp_1 = _get_holder_(this_0);
        tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      }
    }
    return tmp;
  }
  function _ValueOrClosed___get_closeCause__impl_(this_0) {
    var tmp;
    var tmp_0 = _get_holder_(this_0);
    if (tmp_0 instanceof Closed_0) {
      tmp = _get_holder_(this_0)._cause_0;
    } else {
      {
        var tmp0_error_0 = 'Channel was not closed';
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      }
    }
    return tmp;
  }
  function ValueOrClosed__toString_impl(this_0) {
    var tmp0_subject = _get_holder_(this_0);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_1(_get_holder_(this_0));
    } else {
      {
        tmp = '' + 'Value(' + _get_holder_(this_0) + ')';
      }
    }
    return tmp;
  }
  function Closed_0(cause) {
    this._cause_0 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals_0(this._cause_0, other._cause_0);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp0_hashCode_0 = this._cause_0;
    var tmp0_safe_receiver_2 = tmp0_hashCode_0;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
  };
  Closed_0.prototype.toString = function () {
    return '' + 'Closed(' + this._cause_0 + ')';
  };
  Closed_0.$metadata$ = {
    simpleName: 'Closed',
    kind: 'class',
    interfaces: []
  };
  function Companion_9() {
    Companion_instance_8 = this;
  }
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_9();
    return Companion_instance_8;
  }
  function ValueOrClosed__hashCode_impl(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function ValueOrClosed__equals_impl(this_0, other) {
    if (!(other instanceof ValueOrClosed))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ValueOrClosed ? other._holder : THROW_CCE();
    if (!equals_0(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ValueOrClosed(holder) {
    Companion_getInstance_8();
    this._holder = holder;
  }
  ValueOrClosed.prototype.toString = function () {
    return ValueOrClosed__toString_impl(this._holder);
  };
  ValueOrClosed.prototype.hashCode = function () {
    return ValueOrClosed__hashCode_impl(this._holder);
  };
  ValueOrClosed.prototype.equals = function (other) {
    return ValueOrClosed__equals_impl(this._holder, other);
  };
  ValueOrClosed.$metadata$ = {
    simpleName: 'ValueOrClosed',
    kind: 'class',
    interfaces: []
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$_0(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = {
    simpleName: 'ClosedReceiveChannelException',
    kind: 'class',
    interfaces: []
  };
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        var tmp0_require_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        if (!tmp0_require_0) {
          var message_1 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString_1(message_1));
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new LinkedListChannel(onUndeliveredElement);
        break;
      case -2:
        tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance()._CHANNEL_DEFAULT_CAPACITY : 1, onBufferOverflow, onUndeliveredElement);
        break;
      default:tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      capacity = 0;
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = {
    simpleName: 'ClosedSendChannelException',
    kind: 'class',
    interfaces: []
  };
  function ChannelCoroutine(parentContext, _channel, active) {
    AbstractCoroutine.call(this, parentContext, active);
    this.__channel = _channel;
  }
  ChannelCoroutine.prototype._get__channel__0 = function () {
    return this.__channel;
  };
  ChannelCoroutine.prototype.invokeOnClose_8 = function (handler) {
    this.__channel.invokeOnClose_8(handler);
  };
  ChannelCoroutine.prototype._get_isClosedForReceive__6 = function () {
    return this.__channel._get_isClosedForReceive__6();
  };
  ChannelCoroutine.prototype._get_isClosedForSend__8 = function () {
    return this.__channel._get_isClosedForSend__8();
  };
  ChannelCoroutine.prototype.receiveOrClosed_7 = function ($cont) {
    return this.__channel.receiveOrClosed_7($cont);
  };
  ChannelCoroutine.prototype.close_9 = function (cause) {
    return this.__channel.close_9(cause);
  };
  ChannelCoroutine.prototype.offer_8 = function (element) {
    return this.__channel.offer_8(element);
  };
  ChannelCoroutine.prototype.cancel_16 = function (cause) {
    if (this._get_isClosedForReceive__6())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_defaultCancellationException_0 = null;
      var tmp1_defaultCancellationException_0 = null;
      var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
      tmp = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_7() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_12(tmp);
  };
  ChannelCoroutine.prototype.cancelInternal_12 = function (cause) {
    var exception = this.toCancellationException$default_7(cause, null, 1, null);
    this.__channel.cancel_16(exception);
    this.cancelCoroutine_1(exception);
    Unit_getInstance();
  };
  ChannelCoroutine.$metadata$ = {
    simpleName: 'ChannelCoroutine',
    kind: 'class',
    interfaces: [Channel]
  };
  function cancelConsumed(_this_, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp0_elvis_lhs_2 = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp = tmp0_elvis_lhs_2 == null ? new CancellationException('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs_2;
    }
    _this_.cancel_16(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this._value_3;
    var tmp;
    if (old === EMPTY) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this._get_onUndeliveredElement__4();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this._value_3 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this._lock_0 = new NoOpLock();
    this._value_3 = EMPTY;
  }
  ConflatedChannel.prototype._get_isBufferAlwaysEmpty__3 = function () {
    return false;
  };
  ConflatedChannel.prototype._get_isBufferEmpty__3 = function () {
    return this._value_3 === EMPTY;
  };
  ConflatedChannel.prototype.offerInternal_4 = function (element) {
    var receive = null;
    var tmp0_withLock_0 = this._lock_0;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_safe_receiver_2 = this._get_closedForSend__4();
      if (tmp0_safe_receiver_2 == null)
        null;
      else {
        return tmp0_safe_receiver_2;
      }
      Unit_getInstance();
      if (this._value_3 === EMPTY) {
        loop: while (true) {
          var tmp1_elvis_lhs_3 = this.takeFirstReceiveOrPeekClosed_4();
          var tmp;
          if (tmp1_elvis_lhs_3 == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs_3;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          } else {
          }
          var token_4 = ensureNotNull(receive).tryResumeReceive_3(element, null);
          if (!(token_4 == null)) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }}
      }var tmp2_safe_receiver_5 = updateValueLocked(this, element);
      if (tmp2_safe_receiver_5 == null)
        null;
      else {
        throw tmp2_safe_receiver_5;
      }
      Unit_getInstance();
      return OFFER_SUCCESS;
    }
     while (false);
    ensureNotNull(receive).completeResumeReceive_3(element);
    return ensureNotNull(receive)._get_offerResult__3();
  };
  ConflatedChannel.prototype.pollInternal_3 = function () {
    var result = null;
    var tmp0_withLock_0 = this._lock_0;
    if (this._value_3 === EMPTY) {
      var tmp0_elvis_lhs_2 = this._get_closedForSend__4();
      return tmp0_elvis_lhs_2 == null ? POLL_FAILED : tmp0_elvis_lhs_2;
    }result = this._value_3;
    this._value_3 = EMPTY;
    return result;
  };
  ConflatedChannel.prototype.onCancelIdempotent_3 = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp0_withLock_0 = this._lock_0;
    undeliveredElementException = updateValueLocked(this, EMPTY);
    AbstractChannel.prototype.onCancelIdempotent_3.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      throw tmp0_safe_receiver;
    }
    Unit_getInstance();
  };
  ConflatedChannel.prototype.enqueueReceiveInternal_3 = function (receive) {
    var tmp0_withLock_0 = this._lock_0;
    return AbstractChannel.prototype.enqueueReceiveInternal_3.call(this, receive);
  };
  ConflatedChannel.prototype._get_bufferDebugString__4 = function () {
    return '' + '(value=' + this._value_3 + ')';
  };
  ConflatedChannel.$metadata$ = {
    simpleName: 'ConflatedChannel',
    kind: 'class',
    interfaces: []
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype._get_isBufferAlwaysEmpty__3 = function () {
    return true;
  };
  LinkedListChannel.prototype._get_isBufferEmpty__3 = function () {
    return true;
  };
  LinkedListChannel.prototype.offerInternal_4 = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.offerInternal_4.call(this, element);
      if (result === OFFER_SUCCESS)
        return OFFER_SUCCESS;
      else {
        if (result === OFFER_FAILED) {
          var sendResult = this.sendBuffered_0(element);
          if (sendResult == null)
            return OFFER_SUCCESS;
          else {
            if (sendResult instanceof Closed)
              return sendResult;
            else {
            }
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            {
              var tmp0_error_0 = '' + 'Invalid offerInternal result ' + result;
              throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
            }
          }
        }
      }
    }
  };
  LinkedListChannel.$metadata$ = {
    simpleName: 'LinkedListChannel',
    kind: 'class',
    interfaces: []
  };
  function ProducerScope() {
  }
  ProducerScope.$metadata$ = {
    simpleName: 'ProducerScope',
    kind: 'interface',
    interfaces: [CoroutineScope, SendChannel]
  };
  function awaitClose(_this_, block, $cont) {
    var tmp = new $awaitCloseCOROUTINE$1(_this_, block, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  }
  function produce(_this_, context, capacity, onBufferOverflow, start, onCompletion, block) {
    var channel = Channel$default(capacity, onBufferOverflow, null, 4, null);
    var newContext = newCoroutineContext(_this_, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.invokeOnCompletion_8(onCompletion);
      Unit_getInstance();
    }coroutine.start_0(start, coroutine, block);
    return coroutine;
  }
  function produce$default(_this_, context, capacity, onBufferOverflow, start, onCompletion, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      capacity = 0;
    if (!(($mask0 & 4) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 8) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    if (!(($mask0 & 16) === 0))
      onCompletion = null;
    return produce(_this_, context, capacity, onBufferOverflow, start, onCompletion, block);
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true);
  }
  ProducerCoroutine.prototype._get_isActive__20 = function () {
    return ChannelCoroutine.prototype._get_isActive__20.call(this);
  };
  ProducerCoroutine.prototype.onCompleted_3 = function (value) {
    var tmp = this._get__channel__0();
    tmp.close$default_7(null, 1, null);
    Unit_getInstance();
  };
  ProducerCoroutine.prototype.onCompleted_5 = function (value) {
    return this.onCompleted_3(value instanceof Unit ? value : THROW_CCE());
  };
  ProducerCoroutine.prototype.onCancelled_4 = function (cause, handled) {
    var processed = this._get__channel__0().close_9(cause);
    if (!processed ? !handled : false)
      handleCoroutineException(this._get_context__47(), cause);
  };
  ProducerCoroutine.$metadata$ = {
    simpleName: 'ProducerCoroutine',
    kind: 'class',
    interfaces: [ProducerScope]
  };
  function _no_name_provided__35($cancellable_2_2) {
    this._$cancellable_2_2 = $cancellable_2_2;
  }
  _no_name_provided__35.prototype.invoke_69 = function (it) {
    var tmp0_resume_0_5 = Unit_getInstance();
    var tmp0_success_0_1_6 = Companion_getInstance_2();
    this._$cancellable_2_2.resumeWith_27(_Result___init__impl_(Unit_getInstance()));
  };
  _no_name_provided__35.prototype.invoke_166 = function (p1) {
    this.invoke_69((p1 == null ? true : p1 instanceof Error) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function $awaitCloseCOROUTINE$1(_this_, block, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this_ = _this_;
    this._block = block;
  }
  $awaitCloseCOROUTINE$1.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 5;
            var tmp_0 = this;
            tmp_0._tmp0_check_00 = this._get_context__47().get_39(Key_getInstance_2()) === this.__this_;
            if (!this._tmp0_check_00) {
              var message_1 = 'awaitClose() can only be invoked from the producer context';
              throw IllegalStateException_init_$Create$(toString_1(message_1));
            }
            this._state_0 = 1;
            continue $sm;
          case 1:
            this._exceptionState = 4;
            this._state_0 = 2;
            var tmp_1 = this;
            tmp_1._tmp0__anonymous__1_12 = this;
            this._cancellable_2_23 = new CancellableContinuationImpl(intercepted(this._tmp0__anonymous__1_12), 1);
            this._cancellable_2_23.initCancellability();
            this.__this_.invokeOnClose_8(_no_name_provided_$factory_29(this._cancellable_2_23));
            suspendResult = this._cancellable_2_23.getResult();
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            this._tmp$ret$01 = suspendResult;
            this._exceptionState = 5;
            this._state_0 = 3;
            continue $sm;
          case 3:
            this._block();
            return Unit_getInstance();
          case 4:
            this._exceptionState = 5;
            var t = this._exception_0;
            this._block();
            throw t;
          case 5:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 5) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $awaitCloseCOROUTINE$1.$metadata$ = {
    simpleName: '$awaitCloseCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_29($cancellable_2_2) {
    var i = new _no_name_provided__35($cancellable_2_2);
    return function (p1) {
      i.invoke_69(p1);
      return Unit_getInstance();
    };
  }
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype._get_isBufferAlwaysEmpty__3 = function () {
    return true;
  };
  RendezvousChannel.prototype._get_isBufferEmpty__3 = function () {
    return true;
  };
  RendezvousChannel.$metadata$ = {
    simpleName: 'RendezvousChannel',
    kind: 'class',
    interfaces: []
  };
  function callbackFlow(block) {
    return CallbackFlowBuilder_init_$Create$(block, null, 0, null, 14, null);
  }
  function CallbackFlowBuilder_init_$Init$(block, context, capacity, onBufferOverflow, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 4) === 0))
      capacity = -2;
    if (!(($mask0 & 8) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    CallbackFlowBuilder.call($this, block, context, capacity, onBufferOverflow);
    return $this;
  }
  function CallbackFlowBuilder_init_$Create$(block, context, capacity, onBufferOverflow, $mask0, $marker) {
    return CallbackFlowBuilder_init_$Init$(block, context, capacity, onBufferOverflow, $mask0, $marker, Object.create(CallbackFlowBuilder.prototype));
  }
  function $collectToCOROUTINE$2(_this_, scope, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__0 = _this_;
    this._scope = scope;
  }
  $collectToCOROUTINE$2.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = ChannelFlowBuilder.prototype.collectTo_1.call(this.__this__0, this._scope, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            if (!this._scope._get_isClosedForSend__8()) {
              throw IllegalStateException_init_$Create$(trimIndent("\n                    'awaitClose { yourCallbackOrListener.cancel() }' should be used in the end of callbackFlow block.\n                    Otherwise, a callback/listener may leak in case of external cancellation.\n                    See callbackFlow API documentation for the details.\n                "));
            }
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collectToCOROUTINE$2.$metadata$ = {
    simpleName: '$collectToCOROUTINE$2',
    kind: 'class',
    interfaces: []
  };
  function CallbackFlowBuilder(block, context, capacity, onBufferOverflow) {
    ChannelFlowBuilder.call(this, block, context, capacity, onBufferOverflow);
    this._block_0 = block;
  }
  CallbackFlowBuilder.prototype.collectTo_1 = function (scope, $cont) {
    var tmp = new $collectToCOROUTINE$2(this, scope, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  CallbackFlowBuilder.$metadata$ = {
    simpleName: 'CallbackFlowBuilder',
    kind: 'class',
    interfaces: []
  };
  function ChannelFlowBuilder(block, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this._block_1 = block;
  }
  ChannelFlowBuilder.prototype.collectTo_1 = function (scope, $cont) {
    return this._block_1(scope, $cont);
  };
  ChannelFlowBuilder.prototype.toString = function () {
    return '' + 'block[' + this._block_1 + '] -> ' + ChannelFlow.prototype.toString.call(this);
  };
  ChannelFlowBuilder.$metadata$ = {
    simpleName: 'ChannelFlowBuilder',
    kind: 'class',
    interfaces: []
  };
  function emitAll(_this_, channel, $cont) {
    return emitAllImpl(_this_, channel, true, $cont);
  }
  function emitAllImpl(_this_, channel, consume, $cont) {
    var tmp = new $emitAllImplCOROUTINE$4(_this_, channel, consume, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  }
  function $emitAllImplCOROUTINE$4(_this_, channel, consume, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__1 = _this_;
    this._channel_0 = channel;
    this._consume = consume;
  }
  $emitAllImplCOROUTINE$4.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 10;
            this._cause0 = null;
            this._state_0 = 1;
            continue $sm;
          case 1:
            this._exceptionState = 9;
            this._exceptionState = 8;
            this._state_0 = 2;
            continue $sm;
          case 2:
            if (false) {
              this._state_0 = 7;
              continue $sm;
            }
            this._state_0 = 3;
            suspendResult = this._channel_0.receiveOrClosed_7(this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            this._state_0 = 4;
            continue $sm;
          case 3:
            this._unboxed2 = suspendResult._holder;
            suspendResult = this._unboxed2;
            this._state_0 = 4;
            continue $sm;
          case 4:
            this._result3 = suspendResult;
            if (_ValueOrClosed___get_isClosed__impl_(this._result3)) {
              var tmp0_safe_receiver = _ValueOrClosed___get_closeCause__impl_(this._result3);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              Unit_getInstance();
              this._state_0 = 7;
              continue $sm;
            } else {
              this._state_0 = 5;
              continue $sm;
            }

            break;
          case 5:
            this._state_0 = 6;
            suspendResult = this.__this__1.emit_9(_ValueOrClosed___get_value__impl_(this._result3), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 6:
            suspendResult;
            this._state_0 = 2;
            continue $sm;
          case 7:
            this._tmp$ret$01_0 = Unit_getInstance();
            this._exceptionState = 10;
            this._state_0 = 11;
            continue $sm;
          case 8:
            this._exceptionState = 9;
            var tmp_0 = this._exception_0;
            if (tmp_0 instanceof Error) {
              var e = this._exception_0;
              var tmp_1 = this;
              this._cause0 = e;
              throw e;
            } else {
              {
                throw this._exception_0;
              }
            }

            break;
          case 9:
            this._exceptionState = 10;
            var t = this._exception_0;
            if (this._consume)
              cancelConsumed(this._channel_0, this._cause0);
            throw t;
          case 10:
            throw this._exception_0;
          case 11:
            if (this._consume)
              cancelConsumed(this._channel_0, this._cause0);
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._exceptionState === 10) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $emitAllImplCOROUTINE$4.$metadata$ = {
    simpleName: '$emitAllImplCOROUTINE$4',
    kind: 'class',
    interfaces: []
  };
  function Flow() {
  }
  Flow.$metadata$ = {
    simpleName: 'Flow',
    kind: 'interface',
    interfaces: []
  };
  function FlowCollector() {
  }
  FlowCollector.$metadata$ = {
    simpleName: 'FlowCollector',
    kind: 'interface',
    interfaces: []
  };
  function MutableSharedFlow() {
  }
  MutableSharedFlow.$metadata$ = {
    simpleName: 'MutableSharedFlow',
    kind: 'interface',
    interfaces: [SharedFlow, FlowCollector]
  };
  function SharedFlow() {
  }
  SharedFlow.$metadata$ = {
    simpleName: 'SharedFlow',
    kind: 'interface',
    interfaces: [Flow]
  };
  var NONE;
  var PENDING;
  function MutableStateFlow() {
  }
  MutableStateFlow.$metadata$ = {
    simpleName: 'MutableStateFlow',
    kind: 'interface',
    interfaces: [StateFlow, MutableSharedFlow]
  };
  function MutableStateFlow_0(value) {
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? NULL : tmp0_elvis_lhs);
  }
  function StateFlow() {
  }
  StateFlow.$metadata$ = {
    simpleName: 'StateFlow',
    kind: 'interface',
    interfaces: [SharedFlow]
  };
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this._get_slots__0();
    var oldState_2 = $this.__state_1._value_0;
    if (!(expectedState == null) ? !equals_0(oldState_2, expectedState) : false)
      return false;
    if (equals_0(oldState_2, newState))
      return true;
    $this.__state_1._value_0 = newState;
    curSequence = $this._sequence_0;
    if ((curSequence & 1) === 0) {
      var tmp0_3 = curSequence;
      curSequence = tmp0_3 + 1 | 0;
      Unit_getInstance();
      $this._sequence_0 = curSequence;
    } else {
      $this._sequence_0 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this._get_slots__0();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp0_iterator_1 = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator_1.hasNext_10()) {
          var element_2 = tmp0_iterator_1.next_10();
          var tmp0_safe_receiver_4 = element_2;
          if (tmp0_safe_receiver_4 == null)
            null;
          else {
            tmp0_safe_receiver_4.makePending();
            Unit_getInstance();
          }
          Unit_getInstance();
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      if ($this._sequence_0 === curSequence) {
        $this._sequence_0 = curSequence + 1 | 0;
        return true;
      }curSequence = $this._sequence_0;
      curSlots = $this._get_slots__0();
    }
  }
  function $collectCOROUTINE$6(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__2 = _this_;
    this._collector = collector;
  }
  $collectCOROUTINE$6.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 12;
            this._slot0 = this.__this__2.allocateSlot_0();
            this._state_0 = 1;
            continue $sm;
          case 1:
            this._exceptionState = 11;
            var tmp_0 = this._collector;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this._state_0 = 2;
              suspendResult = this._collector.onSubscription(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                return suspendResult;
              }continue $sm;
            } else {
              {
                this._state_0 = 3;
                continue $sm;
              }
            }

            break;
          case 2:
            suspendResult;
            this._state_0 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1._collectorJob2 = this._get_context__47().get_39(Key_getInstance_2());
            this._oldState3 = null;
            this._state_0 = 4;
            continue $sm;
          case 4:
            if (false) {
              this._state_0 = 9;
              continue $sm;
            }
            this._newState4 = this.__this__2.__state_1._value_0;
            var tmp0_safe_receiver = this._collectorJob2;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive(tmp0_safe_receiver);
              Unit_getInstance();
            }

            Unit_getInstance();
            if (this._oldState3 == null ? true : !equals_0(this._oldState3, this._newState4)) {
              this._state_0 = 5;
              var tmp_2 = this;
              tmp_2._tmp0_unbox_05 = NULL;
              var tmp_3;
              if (this._newState4 === this._tmp0_unbox_05) {
                tmp_3 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_4 = this._newState4;
                tmp_3 = isObject(tmp_4) ? tmp_4 : THROW_CCE();
              }
              suspendResult = this._collector.emit_9(tmp_3, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                return suspendResult;
              }continue $sm;
            } else {
              this._state_0 = 6;
              continue $sm;
            }

            break;
          case 5:
            suspendResult;
            this._oldState3 = this._newState4;
            this._state_0 = 6;
            continue $sm;
          case 6:
            if (!this._slot0.takePending()) {
              this._state_0 = 7;
              suspendResult = this._slot0.awaitPending(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                return suspendResult;
              }continue $sm;
            } else {
              this._state_0 = 8;
              continue $sm;
            }

            break;
          case 7:
            suspendResult;
            this._state_0 = 8;
            continue $sm;
          case 8:
            this._state_0 = 4;
            continue $sm;
          case 9:
            this._tmp$ret$01_1 = Unit_getInstance();
            this._exceptionState = 12;
            this._state_0 = 10;
            continue $sm;
          case 10:
            this.__this__2.freeSlot_0(this._slot0);
            return Unit_getInstance();
          case 11:
            this._exceptionState = 12;
            var t = this._exception_0;
            this.__this__2.freeSlot_0(this._slot0);
            throw t;
          case 12:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 12) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$6.$metadata$ = {
    simpleName: '$collectCOROUTINE$6',
    kind: 'class',
    interfaces: []
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.__state_1 = atomic(initialState);
    this._sequence_0 = 0;
  }
  StateFlowImpl.prototype._set_value__3 = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? NULL : tmp0_elvis_lhs);
    Unit_getInstance();
  };
  StateFlowImpl.prototype._get_value__7 = function () {
    var tmp0_unbox_0 = NULL;
    var tmp1_unbox_0 = this.__state_1._value_0;
    var tmp;
    if (tmp1_unbox_0 === tmp0_unbox_0) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox_0) ? tmp1_unbox_0 : THROW_CCE();
    }
    return tmp;
  };
  StateFlowImpl.prototype.compareAndSet_0 = function (expect, update) {
    var tmp0_elvis_lhs = expect;
    var tmp = tmp0_elvis_lhs == null ? NULL : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = update;
    return updateState(this, tmp, tmp1_elvis_lhs == null ? NULL : tmp1_elvis_lhs);
  };
  StateFlowImpl.prototype.emit_9 = function (value, $cont) {
    this._set_value__3(value);
  };
  StateFlowImpl.prototype.collect_12 = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$6(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  StateFlowImpl.prototype.createSlot_0 = function () {
    return new StateFlowSlot();
  };
  StateFlowImpl.prototype.createSlotArray_0 = function (size_0) {
    return fillArrayVal(Array(size_0), null);
  };
  StateFlowImpl.$metadata$ = {
    simpleName: 'StateFlowImpl',
    kind: 'class',
    interfaces: [MutableStateFlow, CancellableFlow, FusibleFlow]
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.__state_2 = atomic(null);
  }
  StateFlowSlot.prototype.allocateLocked = function (flow) {
    if (!(this.__state_2._value_0 == null))
      return false;
    this.__state_2._value_0 = NONE;
    return true;
  };
  StateFlowSlot.prototype.allocateLocked_1 = function (flow) {
    return this.allocateLocked(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.freeLocked = function (flow) {
    this.__state_2._value_0 = null;
    return EMPTY_RESUMES;
  };
  StateFlowSlot.prototype.freeLocked_1 = function (flow) {
    return this.freeLocked(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  StateFlowSlot.prototype.makePending = function () {
    var tmp0_loop_0 = this.__state_2;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (tmp1__anonymous__1 == null)
        return Unit_getInstance();
      else if (tmp1__anonymous__1 === PENDING)
        return Unit_getInstance();
      else if (tmp1__anonymous__1 === NONE) {
        if (this.__state_2.compareAndSet$atomicfu(tmp1__anonymous__1, PENDING))
          return Unit_getInstance();
      } else {
        if (this.__state_2.compareAndSet$atomicfu(tmp1__anonymous__1, NONE)) {
          var tmp0_resume_0_2 = tmp1__anonymous__1 instanceof CancellableContinuationImpl ? tmp1__anonymous__1 : THROW_CCE();
          var tmp1_resume_0_3 = Unit_getInstance();
          var tmp0_success_0_1_4 = Companion_getInstance_2();
          tmp0_resume_0_2.resumeWith_27(_Result___init__impl_(Unit_getInstance()));
          return Unit_getInstance();
        }}
    }
    Unit_getInstance();
  };
  StateFlowSlot.prototype.takePending = function () {
    var tmp0_let_0 = ensureNotNull(this.__state_2.getAndSet$atomicfu(NONE));
    return tmp0_let_0 === PENDING;
  };
  StateFlowSlot.prototype.awaitPending = function ($cont) {
    var tmp0__anonymous__1_1 = $cont;
    var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
    cancellable_2_2.initCancellability();
    var tmp$ret$0;
    l$ret$1: do {
      if (this.__state_2.compareAndSet$atomicfu(NONE, cancellable_2_2)) {
        tmp$ret$0 = Unit_getInstance();
        break l$ret$1;
      }var tmp0_resume_0_4 = Unit_getInstance();
      var tmp0_success_0_1_5 = Companion_getInstance_2();
      cancellable_2_2.resumeWith_27(_Result___init__impl_(Unit_getInstance()));
    }
     while (false);
    return cancellable_2_2.getResult();
  };
  StateFlowSlot.$metadata$ = {
    simpleName: 'StateFlowSlot',
    kind: 'class',
    interfaces: []
  };
  function increment(_this_, delta_0) {
    while (true) {
      var current = _this_._get_value__7();
      if (_this_.compareAndSet_0(current, current + delta_0 | 0))
        return Unit_getInstance();
    }
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this._slots = null;
    this._nCollectors = 0;
    this._nextIndex = 0;
    this.__subscriptionCount = null;
  }
  AbstractSharedFlow.prototype._get_slots__0 = function () {
    return this._slots;
  };
  AbstractSharedFlow.prototype.allocateSlot_0 = function () {
    var subscriptionCount = null;
    var curSlots_3 = this._slots;
    var tmp;
    if (curSlots_3 == null) {
      var tmp0_also_0_4 = this.createSlotArray_0(2);
      this._slots = tmp0_also_0_4;
      tmp = tmp0_also_0_4;
    } else {
      var tmp_0;
      if (this._nCollectors >= curSlots_3.length) {
        var tmp1_also_0_5 = copyOf(curSlots_3, imul(2, curSlots_3.length));
        this._slots = tmp1_also_0_5;
        tmp_0 = tmp1_also_0_5;
      } else {
        tmp_0 = curSlots_3;
      }
      tmp = tmp_0;
    }
    var slots_2 = tmp;
    var index_6 = this._nextIndex;
    var slot_7;
    $l$break: while (true) {
      var tmp0_elvis_lhs_8 = slots_2[index_6];
      var tmp_1;
      if (tmp0_elvis_lhs_8 == null) {
        var tmp2_also_0_9 = this.createSlot_0();
        slots_2[index_6] = tmp2_also_0_9;
        tmp_1 = tmp2_also_0_9;
      } else {
        tmp_1 = tmp0_elvis_lhs_8;
      }
      slot_7 = tmp_1;
      var tmp1_10 = index_6;
      index_6 = tmp1_10 + 1 | 0;
      Unit_getInstance();
      if (index_6 >= slots_2.length)
        index_6 = 0;
      if ((slot_7 instanceof AbstractSharedFlowSlot ? slot_7 : THROW_CCE()).allocateLocked_1(this))
        break $l$break;
      else {
      }
    }
    this._nextIndex = index_6;
    var tmp2_this_11 = this;
    var tmp3_12 = tmp2_this_11._nCollectors;
    tmp2_this_11._nCollectors = tmp3_12 + 1 | 0;
    Unit_getInstance();
    subscriptionCount = this.__subscriptionCount;
    var slot = slot_7;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else {
      increment(tmp0_safe_receiver, 1);
      Unit_getInstance();
    }
    Unit_getInstance();
    return slot;
  };
  AbstractSharedFlow.prototype.freeSlot_0 = function (slot) {
    var subscriptionCount = null;
    var tmp0_this_2 = this;
    var tmp1_3 = tmp0_this_2._nCollectors;
    tmp0_this_2._nCollectors = tmp1_3 - 1 | 0;
    Unit_getInstance();
    subscriptionCount = this.__subscriptionCount;
    if (this._nCollectors === 0)
      this._nextIndex = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).freeLocked_1(this);
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp0_resume_0 = Unit_getInstance();
        var tmp0_success_0_1 = Companion_getInstance_2();
        tmp1_safe_receiver.resumeWith_27(_Result___init__impl_(Unit_getInstance()));
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else {
      increment(tmp2_safe_receiver, -1);
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  AbstractSharedFlow.$metadata$ = {
    simpleName: 'AbstractSharedFlow',
    kind: 'class',
    interfaces: []
  };
  function AbstractSharedFlowSlot() {
  }
  AbstractSharedFlowSlot.$metadata$ = {
    simpleName: 'AbstractSharedFlowSlot',
    kind: 'class',
    interfaces: []
  };
  function EMPTY_RESUMES$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function FusibleFlow() {
  }
  FusibleFlow.$metadata$ = {
    simpleName: 'FusibleFlow',
    kind: 'interface',
    interfaces: [Flow]
  };
  function _get_produceCapacity_($this) {
    return $this._capacity_0 === -3 ? -2 : $this._capacity_0;
  }
  function _no_name_provided__36(this$0, resultContinuation) {
    this._this$0_5 = this$0;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__36.prototype.invoke_71 = function (it, $cont) {
    var tmp = this.create(it, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__36.prototype.invoke_166 = function (p1, $cont) {
    this.invoke_71((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__36.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this._this$0_5.collectTo_1(this._it, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__36.prototype.create = function (it, completion) {
    var i = new _no_name_provided__36(this._this$0_5, completion);
    i._it = it;
    return i;
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided__37($collector, this$0, resultContinuation) {
    this._$collector = $collector;
    this._this$0_6 = this$0;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__37.prototype.invoke_101 = function (_this__0, $cont) {
    var tmp = this.create_4(_this__0, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__37.prototype.invoke_166 = function (p1, $cont) {
    this.invoke_101((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__37.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = emitAll(this._$collector, this._this$0_6.produceImpl_1(this.__this__3), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__37.prototype.create_4 = function (_this__0, completion) {
    var i = new _no_name_provided__37(this._$collector, this._this$0_6, completion);
    i.__this__3 = _this__0;
    return i;
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this._context_1 = context;
    this._capacity_0 = capacity;
    this._onBufferOverflow_0 = onBufferOverflow;
  }
  ChannelFlow.prototype._get_collectToFun__1 = function () {
    return _no_name_provided_$factory_30(this, null);
  };
  ChannelFlow.prototype.produceImpl_1 = function (scope) {
    var tmp = _get_produceCapacity_(this);
    var tmp_0 = CoroutineStart_ATOMIC_getInstance();
    return produce$default(scope, this._context_1, tmp, this._onBufferOverflow_0, tmp_0, null, this._get_collectToFun__1(), 16, null);
  };
  ChannelFlow.prototype.collect_12 = function (collector, $cont) {
    return coroutineScope(_no_name_provided_$factory_31(collector, this, null), $cont);
  };
  ChannelFlow.prototype.additionalToStringProps_1 = function () {
    return null;
  };
  ChannelFlow.prototype.toString = function () {
    var props = ArrayList_init_$Create$_0(4);
    var tmp0_safe_receiver = this.additionalToStringProps_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      props.add_16(tmp0_safe_receiver);
    }
    Unit_getInstance();
    if (!(this._context_1 === EmptyCoroutineContext_getInstance())) {
      props.add_16('' + 'context=' + this._context_1);
      Unit_getInstance();
    }if (!(this._capacity_0 === -3)) {
      props.add_16('' + 'capacity=' + this._capacity_0);
      Unit_getInstance();
    }if (!this._onBufferOverflow_0.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.add_16('' + 'onBufferOverflow=' + this._onBufferOverflow_0);
      Unit_getInstance();
    }var tmp = _get_classSimpleName_(this);
    return '' + tmp + '[' + joinToString$default_0(props, ', ', null, null, 0, null, null, 62, null) + ']';
  };
  ChannelFlow.$metadata$ = {
    simpleName: 'ChannelFlow',
    kind: 'class',
    interfaces: [FusibleFlow]
  };
  function _no_name_provided_$factory_30(this$0, resultContinuation) {
    var i = new _no_name_provided__36(this$0, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_71(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_31($collector, this$0, resultContinuation) {
    var i = new _no_name_provided__37($collector, this$0, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_101(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function NopCollector() {
    NopCollector_instance = this;
  }
  NopCollector.prototype.emit_1 = function (value, $cont) {
  };
  NopCollector.prototype.emit_9 = function (value, $cont) {
    return this.emit_1((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  NopCollector.$metadata$ = {
    simpleName: 'NopCollector',
    kind: 'object',
    interfaces: [FlowCollector]
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    if (NopCollector_instance == null)
      new NopCollector();
    return NopCollector_instance;
  }
  var NULL;
  function checkContext(_this_, currentContext) {
    var result = currentContext.fold_22(0, _no_name_provided_$factory_32(_this_));
    if (!(result === _this_._collectContextSize)) {
      var tmp0_error_0 = 'Flow invariant is violated:\n' + ('' + '\t\tFlow was collected in ' + _this_._collectContext + ',\n') + ('' + '\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }}
  function transitiveCoroutineParent(_this_, collectJob) {
    var $this = _this_;
    var collectJob_0 = collectJob;
    while (true) {
      var $this_0 = $this;
      var collectJob_1 = collectJob_0;
      if ($this_0 === null)
        return null;
      if ($this_0 === collectJob_1)
        return $this_0;
      if (!($this_0 instanceof ScopeCoroutine))
        return $this_0;
      else {
      }
      $this = $this_0._get_parent_();
      collectJob_0 = collectJob_1;
      continue;
    }
  }
  function _no_name_provided__38($this_checkContext) {
    this._$this_checkContext = $this_checkContext;
  }
  _no_name_provided__38.prototype.invoke_95 = function (count, element) {
    var key = element._get_key__24();
    var collectElement = this._$this_checkContext._collectContext.get_39(key);
    if (!(key === Key_getInstance_2())) {
      return !(element === collectElement) ? IntCompanionObject_getInstance()._MIN_VALUE : count + 1 | 0;
    }var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
    var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
    if (!(emissionParentJob === collectJob)) {
      var tmp0_error_0 = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('' + '\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }return collectJob == null ? count : count + 1 | 0;
  };
  _no_name_provided__38.prototype.invoke_134 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE();
    return this.invoke_95(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_32($this_checkContext) {
    var i = new _no_name_provided__38($this_checkContext);
    return function (p1, p2) {
      return i.invoke_95(p1, p2);
    };
  }
  function CancellableFlow() {
  }
  CancellableFlow.$metadata$ = {
    simpleName: 'CancellableFlow',
    kind: 'interface',
    interfaces: [Flow]
  };
  function catch_0(_this_, action) {
    return new _no_name_provided__1_1(_this_, action);
  }
  function catchImpl(_this_, collector, $cont) {
    var tmp = new $catchImplCOROUTINE$13(_this_, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  }
  function isSameExceptionAs(_this_, other) {
    return !(other == null) ? equals_0(unwrap(other), unwrap(_this_)) : false;
  }
  function isCancellationCause(_this_, coroutineContext) {
    var job = coroutineContext.get_39(Key_getInstance_2());
    if (job == null ? true : !job._get_isCancelled__8())
      return false;
    return isSameExceptionAs(_this_, job.getCancellationException_8());
  }
  function $collect_2COROUTINE$14(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__4 = _this_;
    this._collector_0 = collector;
  }
  $collect_2COROUTINE$14.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 4;
            this._state_0 = 1;
            suspendResult = catchImpl(this.__this__4._$this_catch, this._collector_0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._exception_70 = suspendResult;
            if (!(this._exception_70 == null)) {
              this._state_0 = 2;
              suspendResult = this.__this__4._$action(this._collector_0, this._exception_70, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                return suspendResult;
              }continue $sm;
            } else {
              this._state_0 = 3;
              continue $sm;
            }

            break;
          case 2:
            suspendResult;
            this._state_0 = 3;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 4) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collect_2COROUTINE$14.$metadata$ = {
    simpleName: '$collect_2COROUTINE$14',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_1($this_catch, $action) {
    this._$this_catch = $this_catch;
    this._$action = $action;
  }
  _no_name_provided__1_1.prototype.collect_2_0 = function (collector, $cont) {
    var tmp = new $collect_2COROUTINE$14(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_1.prototype.collect_12 = function (collector, $cont) {
    return this.collect_2_0(collector, $cont);
  };
  _no_name_provided__1_1.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Flow]
  };
  function $emit_2COROUTINE$15(_this_, value, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__5 = _this_;
    this._value_4 = value;
  }
  $emit_2COROUTINE$15.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this.__this__5._$collector_0.emit_9(this._value_4, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            this._exceptionState = 3;
            this._state_0 = 4;
            continue $sm;
          case 2:
            this._exceptionState = 3;
            var tmp_0 = this._exception_0;
            if (tmp_0 instanceof Error) {
              var e_7 = this._exception_0;
              this.__this__5._$fromDownstream._v = e_7;
              throw e_7;
            } else {
              {
                throw this._exception_0;
              }
            }

            break;
          case 3:
            throw this._exception_0;
          case 4:
            this._exceptionState = 3;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $emit_2COROUTINE$15.$metadata$ = {
    simpleName: '$emit_2COROUTINE$15',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_2($collector, $fromDownstream) {
    this._$collector_0 = $collector;
    this._$fromDownstream = $fromDownstream;
  }
  _no_name_provided__1_2.prototype.emit_2_0 = function (value, $cont) {
    var tmp = new $emit_2COROUTINE$15(this, value, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_2.prototype.emit_9 = function (value, $cont) {
    return this.emit_2_0((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__1_2.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $catchImplCOROUTINE$13(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__6 = _this_;
    this._collector_1 = collector;
  }
  $catchImplCOROUTINE$13.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._fromDownstream0 = {_v: null};
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this.__this__6.collect_12(new _no_name_provided__1_2(this._collector_1, this._fromDownstream0), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            this._exceptionState = 3;
            this._state_0 = 4;
            continue $sm;
          case 2:
            this._exceptionState = 3;
            var tmp_0 = this._exception_0;
            if (tmp_0 instanceof Error) {
              var e = this._exception_0;
              var tmp_1;
              if (isSameExceptionAs(e, this._fromDownstream0._v)) {
                tmp_1 = true;
              } else {
                tmp_1 = isCancellationCause(e, this._get_context__47());
              }
              if (tmp_1) {
                throw e;
              } else {
                {
                  return e;
                }
              }
              this._state_0 = 4;
              continue $sm;
            } else {
              {
                throw this._exception_0;
              }
            }

            break;
          case 3:
            throw this._exception_0;
          case 4:
            this._exceptionState = 3;
            return null;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $catchImplCOROUTINE$13.$metadata$ = {
    simpleName: '$catchImplCOROUTINE$13',
    kind: 'class',
    interfaces: []
  };
  function asStateFlow(_this_) {
    return new ReadonlyStateFlow(_this_);
  }
  function $onSubscriptionCOROUTINE$21(_this_, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__7 = _this_;
  }
  $onSubscriptionCOROUTINE$21.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 7;
            var tmp_0 = this;
            tmp_0._safeCollector0 = new SafeCollector(this.__this__7._collector_2, this._get_context__47());
            this._state_0 = 1;
            continue $sm;
          case 1:
            this._exceptionState = 6;
            this._state_0 = 2;
            suspendResult = this.__this__7._action(this._safeCollector0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            this._tmp$ret$01_2 = suspendResult;
            this._exceptionState = 7;
            this._state_0 = 3;
            continue $sm;
          case 3:
            this._safeCollector0.releaseIntercepted();
            var tmp_1 = this.__this__7._collector_2;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this._state_0 = 4;
              suspendResult = this.__this__7._collector_2.onSubscription(this);
              if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                return suspendResult;
              }continue $sm;
            } else {
              {
                this._state_0 = 5;
                continue $sm;
              }
            }

            break;
          case 4:
            suspendResult;
            this._state_0 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this._exceptionState = 7;
            var t = this._exception_0;
            this._safeCollector0.releaseIntercepted();
            throw t;
          case 7:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 7) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $onSubscriptionCOROUTINE$21.$metadata$ = {
    simpleName: '$onSubscriptionCOROUTINE$21',
    kind: 'class',
    interfaces: []
  };
  function SubscribedFlowCollector() {
  }
  SubscribedFlowCollector.prototype.onSubscription = function ($cont) {
    var tmp = new $onSubscriptionCOROUTINE$21(this, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  SubscribedFlowCollector.$metadata$ = {
    simpleName: 'SubscribedFlowCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function ReadonlyStateFlow(flow) {
    this._$$delegate_0 = flow;
  }
  ReadonlyStateFlow.prototype.collect_12 = function (collector, $cont) {
    return this._$$delegate_0.collect_12(collector, $cont);
  };
  ReadonlyStateFlow.$metadata$ = {
    simpleName: 'ReadonlyStateFlow',
    kind: 'class',
    interfaces: [StateFlow, CancellableFlow, FusibleFlow]
  };
  function onEach(_this_, action) {
    return new _no_name_provided__1_1_0(_this_, action);
  }
  function scan(_this_, initial, operation) {
    return new _no_name_provided__1_3(initial, _this_, operation);
  }
  function $emit_2_8_4COROUTINE$23(_this_, value, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__8 = _this_;
    this._value_5 = value;
  }
  $emit_2_8_4COROUTINE$23.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            suspendResult = this.__this__8._$action_0(this._value_5, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            this._state_0 = 2;
            suspendResult = this.__this__8._$collector_1.emit_9(this._value_5, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            suspendResult;
            return Unit_getInstance();
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $emit_2_8_4COROUTINE$23.$metadata$ = {
    simpleName: '$emit_2_8_4COROUTINE$23',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_7_3($action, $collector) {
    this._$action_0 = $action;
    this._$collector_1 = $collector;
  }
  _no_name_provided__1_7_3.prototype.emit_2_8_4 = function (value, $cont) {
    var tmp = new $emit_2_8_4COROUTINE$23(this, value, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_7_3.prototype.emit_9 = function (value, $cont) {
    return this.emit_2_8_4((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__1_7_3.$metadata$ = {
    simpleName: '<no name provided>_1_7_3',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $collect_2_2COROUTINE$22(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__9 = _this_;
    this._collector_3 = collector;
  }
  $collect_2_2COROUTINE$22.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this.__this__9._$this_onEach.collect_12(new _no_name_provided__1_7_3(this.__this__9._$action_1, this._collector_3), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collect_2_2COROUTINE$22.$metadata$ = {
    simpleName: '$collect_2_2COROUTINE$22',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_1_0($this_onEach, $action) {
    this._$this_onEach = $this_onEach;
    this._$action_1 = $action;
  }
  _no_name_provided__1_1_0.prototype.collect_2_2 = function (collector, $cont) {
    var tmp = new $collect_2_2COROUTINE$22(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_1_0.prototype.collect_12 = function (collector, $cont) {
    return this.collect_2_2(collector, $cont);
  };
  _no_name_provided__1_1_0.$metadata$ = {
    simpleName: '<no name provided>_1_1',
    kind: 'class',
    interfaces: [Flow]
  };
  function $emit_2_9COROUTINE$27(_this_, value, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__10 = _this_;
    this._value_6 = value;
  }
  $emit_2_9COROUTINE$27.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            suspendResult = this.__this__10._$operation(this.__this__10._$accumulator_7._v, this._value_6, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._ARGUMENT0 = suspendResult;
            this.__this__10._$accumulator_7._v = this._ARGUMENT0;
            this._state_0 = 2;
            suspendResult = this.__this__10._$collector_2.emit_9(this.__this__10._$accumulator_7._v, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            suspendResult;
            return Unit_getInstance();
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $emit_2_9COROUTINE$27.$metadata$ = {
    simpleName: '$emit_2_9COROUTINE$27',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_8($accumulator_7, $operation, $collector) {
    this._$accumulator_7 = $accumulator_7;
    this._$operation = $operation;
    this._$collector_2 = $collector;
  }
  _no_name_provided__1_8.prototype.emit_2_9 = function (value, $cont) {
    var tmp = new $emit_2_9COROUTINE$27(this, value, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_8.prototype.emit_9 = function (value, $cont) {
    return this.emit_2_9((value == null ? true : isObject(value)) ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__1_8.$metadata$ = {
    simpleName: '<no name provided>_1_8',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $collect_2COROUTINE$26(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__11 = _this_;
    this._collector_4 = collector;
  }
  $collect_2COROUTINE$26.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._accumulator_70 = {_v: this.__this__11._$initial};
            this._state_0 = 1;
            suspendResult = this._collector_4.emit_9(this._accumulator_70._v, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            this._state_0 = 2;
            suspendResult = this.__this__11._$this_scan.collect_12(new _no_name_provided__1_8(this._accumulator_70, this.__this__11._$operation_0, this._collector_4), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            suspendResult;
            return Unit_getInstance();
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collect_2COROUTINE$26.$metadata$ = {
    simpleName: '$collect_2COROUTINE$26',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_3($initial, $this_scan, $operation) {
    this._$initial = $initial;
    this._$this_scan = $this_scan;
    this._$operation_0 = $operation;
  }
  _no_name_provided__1_3.prototype.collect_2_1 = function (collector, $cont) {
    var tmp = new $collect_2COROUTINE$26(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_3.prototype.collect_12 = function (collector, $cont) {
    return this.collect_2_1(collector, $cont);
  };
  _no_name_provided__1_3.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Flow]
  };
  function launchIn(_this_, scope) {
    return launch$default(scope, null, null, _no_name_provided_$factory_33(_this_, null), 3, null);
  }
  function collect(_this_, $cont) {
    return _this_.collect_12(NopCollector_getInstance(), $cont);
  }
  function _no_name_provided__39($this_launchIn, resultContinuation) {
    this._$this_launchIn = $this_launchIn;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__39.prototype.invoke_101 = function (_this__0, $cont) {
    var tmp = this.create_4(_this__0, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__39.prototype.invoke_166 = function (p1, $cont) {
    this.invoke_101((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__39.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = collect(this._$this_launchIn, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__39.prototype.create_4 = function (_this__0, completion) {
    var i = new _no_name_provided__39(this._$this_launchIn, completion);
    i.__this__12 = _this__0;
    return i;
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided_$factory_33($this_launchIn, resultContinuation) {
    var i = new _no_name_provided__39($this_launchIn, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_101(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ensureCapacity_0($this) {
    var currentSize = $this._elements.length;
    var newCapacity = currentSize << 1;
    var newElements = fillArrayVal(Array(newCapacity), null);
    var tmp0_copyInto_0 = $this._elements;
    var tmp1_copyInto_0 = $this._head_1;
    var tmp2_copyInto_0 = 0;
    var tmp3_copyInto_0 = tmp0_copyInto_0.length;
    arrayCopy_0(tmp0_copyInto_0, newElements, tmp2_copyInto_0, tmp1_copyInto_0, tmp3_copyInto_0);
    Unit_getInstance();
    var tmp4_copyInto_0 = $this._elements;
    var tmp5_copyInto_0 = $this._elements.length - $this._head_1 | 0;
    var tmp6_copyInto_0 = $this._head_1;
    var tmp7_copyInto_0 = 0;
    arrayCopy_0(tmp4_copyInto_0, newElements, tmp5_copyInto_0, tmp7_copyInto_0, tmp6_copyInto_0);
    Unit_getInstance();
    $this._elements = newElements;
    $this._head_1 = 0;
    $this._tail = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp0_arrayOfNulls_0 = 16;
    tmp._elements = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
    this._head_1 = 0;
    this._tail = 0;
  }
  ArrayQueue.prototype._get_isEmpty__4 = function () {
    return this._head_1 === this._tail;
  };
  ArrayQueue.prototype.addLast_13 = function (element) {
    this._elements[this._tail] = element;
    this._tail = (this._tail + 1 | 0) & (this._elements.length - 1 | 0);
    if (this._tail === this._head_1)
      ensureCapacity_0(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_4 = function () {
    if (this._head_1 === this._tail)
      return null;
    var element = this._elements[this._head_1];
    this._elements[this._head_1] = null;
    this._head_1 = (this._head_1 + 1 | 0) & (this._elements.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  var NO_DECISION;
  function OpDescriptor() {
  }
  OpDescriptor.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this);
  };
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  function AtomicOp() {
    OpDescriptor.call(this);
    this.__consensus = atomic(NO_DECISION);
  }
  AtomicOp.prototype.decide_0 = function (decision) {
    var current = this.__consensus._value_0;
    if (!(current === NO_DECISION))
      return current;
    if (this.__consensus.compareAndSet$atomicfu(NO_DECISION, decision))
      return decision;
    return this.__consensus._value_0;
  };
  AtomicOp.prototype.perform_1 = function (affected) {
    var decision = this.__consensus._value_0;
    if (decision === NO_DECISION) {
      decision = this.decide_0(this.prepare_1((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }this.complete_2((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = {
    simpleName: 'AtomicOp',
    kind: 'class',
    interfaces: []
  };
  var UNDEFINED;
  var REUSABLE_CLAIMED;
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this._dispatcher = dispatcher;
    this._continuation_0 = continuation;
    this.__state_3 = UNDEFINED;
    var tmp = this;
    var tmp_0 = this._continuation_0;
    tmp._callerFrame = isInterface(tmp_0, CoroutineStackFrame) ? tmp_0 : null;
    this._countOrElement = threadContextElements(this._get_context__47());
    this.__reusableCancellableContinuation = atomic(null);
  }
  DispatchedContinuation.prototype._get_context__47 = function () {
    return this._continuation_0._get_context__47();
  };
  DispatchedContinuation.prototype._get_reusableCancellableContinuation_ = function () {
    var tmp = this.__reusableCancellableContinuation._value_0;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  };
  DispatchedContinuation.prototype.isReusable = function (requester) {
    var tmp0_elvis_lhs = this.__reusableCancellableContinuation._value_0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    if (value instanceof CancellableContinuationImpl)
      return value === requester;
    else {
    }
    return true;
  };
  DispatchedContinuation.prototype.claimReusableCancellableContinuation = function () {
    var tmp0_loop_0 = this.__reusableCancellableContinuation;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (tmp1__anonymous__1 === null) {
        this.__reusableCancellableContinuation._value_0 = REUSABLE_CLAIMED;
        return null;
      } else {
        if (tmp1__anonymous__1 instanceof CancellableContinuationImpl) {
          if (this.__reusableCancellableContinuation.compareAndSet$atomicfu(tmp1__anonymous__1, REUSABLE_CLAIMED)) {
            return tmp1__anonymous__1 instanceof CancellableContinuationImpl ? tmp1__anonymous__1 : THROW_CCE();
          }} else {
          {
            var tmp0_error_0_2 = '' + 'Inconsistent state ' + tmp1__anonymous__1;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_2));
          }
        }
      }
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.checkPostponedCancellation = function (continuation) {
    var tmp0_loop_0 = this.__reusableCancellableContinuation;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (tmp1__anonymous__1 === REUSABLE_CLAIMED) {
        if (this.__reusableCancellableContinuation.compareAndSet$atomicfu(REUSABLE_CLAIMED, continuation))
          return null;
      } else {
        if (tmp1__anonymous__1 === null)
          return null;
        else {
          if (tmp1__anonymous__1 instanceof Error) {
            var tmp0_require_0_2 = this.__reusableCancellableContinuation.compareAndSet$atomicfu(tmp1__anonymous__1, null);
            if (!tmp0_require_0_2) {
              var message_2_1_3 = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString_1(message_2_1_3));
            }return tmp1__anonymous__1;
          } else {
            {
              var tmp1_error_0_4 = '' + 'Inconsistent state ' + tmp1__anonymous__1;
              throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_4));
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.postponeCancellation = function (cause) {
    var tmp0_loop_0 = this.__reusableCancellableContinuation;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (equals_0(tmp0_subject_2, REUSABLE_CLAIMED)) {
        if (this.__reusableCancellableContinuation.compareAndSet$atomicfu(REUSABLE_CLAIMED, cause))
          return true;
      } else {
        if (tmp0_subject_2 instanceof Error)
          return true;
        else {
          {
            if (this.__reusableCancellableContinuation.compareAndSet$atomicfu(tmp1__anonymous__1, null))
              return false;
          }
        }
      }
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.takeState_1 = function () {
    var state = this.__state_3;
    this.__state_3 = UNDEFINED;
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__1 = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_27 = function (result) {
    var context = this._continuation_0._get_context__47();
    var state = toState$default(result, null, 1, null);
    if (this._dispatcher.isDispatchNeeded_8(context)) {
      this.__state_3 = state;
      this._set_resumeMode__0(0);
      this._dispatcher.dispatch_8(context, this);
    } else {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0_executeUnconfined_0 = 0;
        var tmp1_executeUnconfined_0 = false;
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
        if (tmp1_executeUnconfined_0 ? eventLoop_2._get_isUnconfinedQueueEmpty__0() : false) {
          tmp$ret$0 = false;
          break l$ret$1;
        }var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__0()) {
          this.__state_3 = state;
          this._set_resumeMode__0(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_0(this);
          tmp = true;
        } else {
          eventLoop_2.incrementUseCount_0(true);
          try {
            var tmp0_withCoroutineContext_0_4 = this._get_context__47();
            var tmp1_withCoroutineContext_0_5 = this._countOrElement;
            this._continuation_0.resumeWith_27(result);
            $l$break: while (true) {
              if (!eventLoop_2.processUnconfinedEvent_0())
                break $l$break;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.handleFatalException_1($p, null);
            } else {
              {
                throw $p;
              }
            }
          }
          finally {
            eventLoop_2.decrementUseCount_0(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
       while (false);
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_1 = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState._onCancellation_0(cause);
    } else {
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return '' + 'DispatchedContinuation[' + this._dispatcher + ', ' + toDebugString(this._continuation_0) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  function resumeCancellableWith(_this_, result, onCancellation) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp0_resumeCancellableWith_0 = _this_;
      var state_1 = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp0_resumeCancellableWith_0._dispatcher.isDispatchNeeded_8(tmp0_resumeCancellableWith_0._get_context__47())) {
        tmp0_resumeCancellableWith_0.__state_3 = state_1;
        tmp0_resumeCancellableWith_0._set_resumeMode__0(1);
        tmp_0 = tmp0_resumeCancellableWith_0._dispatcher.dispatch_8(tmp0_resumeCancellableWith_0._get_context__47(), tmp0_resumeCancellableWith_0);
      } else {
        var tmp$ret$0;
        l$ret$1: do {
          var tmp0_executeUnconfined_0_2 = 1;
          var tmp1_executeUnconfined_0_3 = false;
          var eventLoop_2_4 = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
          if (tmp1_executeUnconfined_0_3 ? eventLoop_2_4._get_isUnconfinedQueueEmpty__0() : false) {
            tmp$ret$0 = false;
            break l$ret$1;
          }var tmp_1;
          if (eventLoop_2_4._get_isUnconfinedLoopActive__0()) {
            tmp0_resumeCancellableWith_0.__state_3 = state_1;
            tmp0_resumeCancellableWith_0._set_resumeMode__0(tmp0_executeUnconfined_0_2);
            eventLoop_2_4.dispatchUnconfined_0(tmp0_resumeCancellableWith_0);
            tmp_1 = true;
          } else {
            eventLoop_2_4.incrementUseCount_0(true);
            try {
              var tmp$ret$2;
              l$ret$3: do {
                var job_1_4_5 = tmp0_resumeCancellableWith_0._get_context__47().get_39(Key_getInstance_2());
                if (!(job_1_4_5 == null) ? !job_1_4_5._get_isActive__20() : false) {
                  var cause_2_5_6 = job_1_4_5.getCancellationException_8();
                  tmp0_resumeCancellableWith_0.cancelCompletedResult_1(state_1, cause_2_5_6);
                  var tmp0_failure_0_1_6_7 = Companion_getInstance_2();
                  tmp0_resumeCancellableWith_0.resumeWith_27(_Result___init__impl_(createFailure(cause_2_5_6)));
                  tmp$ret$2 = true;
                  break l$ret$3;
                }tmp$ret$2 = false;
              }
               while (false);
              if (!tmp$ret$2) {
                var tmp0_withCoroutineContext_0_7_8 = tmp0_resumeCancellableWith_0._get_context__47();
                var tmp1_withCoroutineContext_0_8_9 = tmp0_resumeCancellableWith_0._countOrElement;
                tmp0_resumeCancellableWith_0._continuation_0.resumeWith_27(result);
              } else {
              }
              $l$break: while (true) {
                if (!eventLoop_2_4.processUnconfinedEvent_0())
                  break $l$break;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp0_resumeCancellableWith_0.handleFatalException_1($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2_4.decrementUseCount_0(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
         while (false);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      {
        tmp = _this_.resumeWith_27(result);
      }
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this_, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this_, result, onCancellation);
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this._resumeMode = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__0 = function (_set___) {
    this._resumeMode = _set___;
  };
  DispatchedTask.prototype._get_resumeMode__0 = function () {
    return this._resumeMode;
  };
  DispatchedTask.prototype.cancelCompletedResult_1 = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_1 = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_1 = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  };
  DispatchedTask.prototype.run_3 = function () {
    var taskContext = _get_taskContext_(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__1();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate._continuation_0;
      var context = continuation._get_context__47();
      var state = this.takeState_1();
      var tmp0_withCoroutineContext_0 = delegate._countOrElement;
      var exception_2 = this.getExceptionalResult_1(state);
      var job_3 = (exception_2 == null ? _get_isCancellableMode_(this._resumeMode) : false) ? context.get_39(Key_getInstance_2()) : null;
      if (!(job_3 == null) ? !job_3._get_isActive__20() : false) {
        var cause_4 = job_3.getCancellationException_8();
        this.cancelCompletedResult_1(state, cause_4);
        var tmp0_failure_0_5 = Companion_getInstance_2();
        var tmp1_failure_0_6 = recoverStackTrace(cause_4, continuation);
        continuation.resumeWith_27(_Result___init__impl_(createFailure(tmp1_failure_0_6)));
      } else {
        if (!(exception_2 == null)) {
          var tmp0_failure_0_1_7 = Companion_getInstance_2();
          continuation.resumeWith_27(_Result___init__impl_(createFailure(exception_2)));
        } else {
          var tmp2_resume_0_8 = this.getSuccessfulResult_1(state);
          var tmp0_success_0_1_9 = Companion_getInstance_2();
          continuation.resumeWith_27(_Result___init__impl_(tmp2_resume_0_8));
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp_0;
      try {
        var tmp0_success_0_1 = Companion_getInstance_2();
        var tmp1_success_0_2 = Unit_getInstance();
        tmp_0 = _Result___init__impl_(Unit_getInstance());
      } catch ($p_0) {
        var tmp_1;
        if ($p_0 instanceof Error) {
          var tmp2_failure_0_4 = Companion_getInstance_2();
          tmp_1 = _Result___init__impl_(createFailure($p_0));
        } else {
          {
            throw $p_0;
          }
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.handleFatalException_1(fatalException, Result__exceptionOrNull_impl(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_1 = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
    }var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('' + 'Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__1()._get_context__47(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_isCancellableMode_(_this_) {
    return _this_ === 1 ? true : _this_ === 2;
  }
  function _get_isReusableMode_(_this_) {
    return _this_ === 2;
  }
  function dispatch(_this_, mode) {
    var delegate = _this_._get_delegate__1();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode_(mode) === _get_isCancellableMode_(_this_._resumeMode);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = delegate._dispatcher;
      var context = delegate._get_context__47();
      if (dispatcher.isDispatchNeeded_8(context)) {
        dispatcher.dispatch_8(context, _this_);
      } else {
        resumeUnconfined(_this_);
      }
    } else {
      {
        resume(_this_, delegate, undispatched);
      }
    }
  }
  function resumeUnconfined(_this_) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
    if (eventLoop._get_isUnconfinedLoopActive__0()) {
      eventLoop.dispatchUnconfined_0(_this_);
    } else {
      eventLoop.incrementUseCount_0(true);
      try {
        resume(_this_, _this_._get_delegate__1(), true);
        $l$break: while (true) {
          if (!eventLoop.processUnconfinedEvent_0())
            break $l$break;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this_.handleFatalException_1($p, null);
        } else {
          {
            throw $p;
          }
        }
      }
      finally {
        eventLoop.decrementUseCount_0(true);
      }
    }
  }
  function resume(_this_, delegate, undispatched) {
    var state = _this_.takeState_1();
    var exception = _this_.getExceptionalResult_1(state);
    var tmp;
    if (!(exception == null)) {
      var tmp0_failure_0 = Companion_getInstance_2();
      tmp = _Result___init__impl_(createFailure(exception));
    } else {
      var tmp1_success_0 = Companion_getInstance_2();
      var tmp2_success_0 = _this_.getSuccessfulResult_1(state);
      tmp = _Result___init__impl_(tmp2_success_0);
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp0_withCoroutineContext_0_1 = tmp3_resumeUndispatchedWith_0._get_context__47();
      var tmp1_withCoroutineContext_0_2 = tmp3_resumeUndispatchedWith_0._countOrElement;
      tmp3_resumeUndispatchedWith_0._continuation_0.resumeWith_27(result);
    } else
      delegate.resumeWith_27(result);
  }
  function _InlineList___init__impl_(holder) {
    return holder;
  }
  function _InlineList___init__impl__0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl_(holder);
    return tmp;
  }
  function _get_holder__0($this) {
    return $this;
  }
  function InlineList__plus_impl(this_0, element) {
    var tmp0_subject = _get_holder__0(this_0);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl_(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__0(this_0);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_16(element);
        Unit_getInstance();
        tmp = _InlineList___init__impl_(_get_holder__0(this_0));
      } else {
        {
          var list = ArrayList_init_$Create$_0(4);
          var tmp_1 = _get_holder__0(this_0);
          list.add_16((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
          Unit_getInstance();
          list.add_16(element);
          Unit_getInstance();
          tmp = _InlineList___init__impl_(list);
        }
      }
    }
    return tmp;
  }
  function bindCancellationFun(_this_, element, context) {
    return _no_name_provided_$factory_34(_this_, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = {
    simpleName: 'UndeliveredElementException',
    kind: 'class',
    interfaces: []
  };
  function callUndeliveredElementCatchingException(_this_, element, undeliveredElementException) {
    try {
      _this_(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
        } else {
          return new UndeliveredElementException('' + 'Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        {
          throw $p;
        }
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this_, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this_, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this_, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this_, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      handleCoroutineException(context, tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
  }
  function _no_name_provided__40($this_bindCancellationFun, $element, $context) {
    this._$this_bindCancellationFun = $this_bindCancellationFun;
    this._$element = $element;
    this._$context = $context;
  }
  _no_name_provided__40.prototype.invoke_93 = function (_anonymous_parameter_0_) {
    callUndeliveredElement(this._$this_bindCancellationFun, this._$element, this._$context);
  };
  _no_name_provided__40.prototype.invoke_166 = function (p1) {
    this.invoke_93(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_34($this_bindCancellationFun, $element, $context) {
    var i = new _no_name_provided__40($this_bindCancellationFun, $element, $context);
    return function (p1) {
      i.invoke_93(p1);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this._coroutineContext = context;
  }
  ContextScope.prototype._get_coroutineContext__6 = function () {
    return this._coroutineContext;
  };
  ContextScope.prototype.toString = function () {
    return '' + 'CoroutineScope(coroutineContext=' + this._coroutineContext + ')';
  };
  ContextScope.$metadata$ = {
    simpleName: 'ContextScope',
    kind: 'class',
    interfaces: [CoroutineScope]
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true);
    this._uCont = uCont;
  }
  ScopeCoroutine.prototype._get_isScopedCoroutine__7 = function () {
    return true;
  };
  ScopeCoroutine.prototype._get_parent_ = function () {
    return this._get_parentContext__0().get_39(Key_getInstance_2());
  };
  ScopeCoroutine.prototype.afterCompletion_7 = function (state) {
    var tmp = intercepted(this._uCont);
    var tmp_0 = recoverResult(state, this._uCont);
    resumeCancellableWith$default(tmp, tmp_0, null, 2, null);
  };
  ScopeCoroutine.prototype.afterResume_4 = function (state) {
    this._uCont.resumeWith_27(recoverResult(state, this._uCont));
  };
  ScopeCoroutine.$metadata$ = {
    simpleName: 'ScopeCoroutine',
    kind: 'class',
    interfaces: [CoroutineStackFrame]
  };
  function Symbol(symbol) {
    this._symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return this._symbol;
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_5();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error_0 = '' + "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_37(parsed) <= 0 ? parsed.compareTo_37(maxValue) <= 0 : false)) {
      var tmp1_error_0 = '' + "System property '" + propertyName + "' should be in range " + minValue + '..' + maxValue + ", but is '" + parsed + "'";
      throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
    }return parsed;
  }
  function startCoroutineCancellable(_this_, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
      var tmp0_success_0_3 = Companion_getInstance_2();
      var tmp1_success_0_4 = Unit_getInstance();
      tmp = resumeCancellableWith(tmp_0, _Result___init__impl_(Unit_getInstance()), onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var tmp0_failure_0 = Companion_getInstance_2();
        tmp_1 = completion.resumeWith_27(_Result___init__impl_(createFailure($p)));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this_, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this_, receiver, completion, onCancellation);
  }
  function startCoroutineCancellable_0(_this_, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this_);
      var tmp0_success_0_4 = Companion_getInstance_2();
      var tmp1_success_0_5 = Unit_getInstance();
      var tmp_1 = _Result___init__impl_(Unit_getInstance());
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var tmp0_failure_0_2 = Companion_getInstance_2();
        tmp_2 = fatalCompletion.resumeWith_27(_Result___init__impl_(createFailure($p)));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function startCoroutineUndispatched(_this_, receiver, completion) {
    var tmp$ret$0;
    l$ret$1: do {
      var actualCompletion_1 = completion;
      var tmp;
      try {
        var tmp0_withCoroutineContext_0_8 = completion._get_context__47();
        var tmp1_withCoroutineContext_0_9 = null;
        tmp = _this_(receiver, actualCompletion_1);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp0_failure_0_1_4 = Companion_getInstance_2();
          actualCompletion_1.resumeWith_27(_Result___init__impl_(createFailure($p)));
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED_())) {
        var tmp0_resume_0_5 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
        var tmp0_success_0_1_6 = Companion_getInstance_2();
        actualCompletion_1.resumeWith_27(_Result___init__impl_(tmp0_resume_0_5));
      }}
     while (false);
  }
  function startUndispatchedOrReturn(_this_, receiver, block) {
    _this_.initParentJob_4();
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      try {
        tmp = block(receiver, _this_);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp_1 = $p;
          tmp_0 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var result_1 = tmp;
      if (result_1 === _get_COROUTINE_SUSPENDED_()) {
        tmp$ret$0 = _get_COROUTINE_SUSPENDED_();
        break l$ret$1;
      }var state_3 = _this_.makeCompletingOnce_5(result_1);
      if (state_3 === COMPLETING_WAITING_CHILDREN) {
        tmp$ret$0 = _get_COROUTINE_SUSPENDED_();
        break l$ret$1;
      }var tmp_2;
      if (state_3 instanceof CompletedExceptionally) {
        var tmp_3;
        var tmp0__anonymous__5 = state_3._cause;
        {
          throw recoverStackTrace(state_3._cause, _this_._uCont);
        }
        tmp_2 = tmp_3;
      } else {
        {
          tmp_2 = unboxState(state_3);
        }
      }
      tmp$ret$0 = tmp_2;
    }
     while (false);
    return tmp$ret$0;
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function SelectClause2() {
  }
  SelectClause2.$metadata$ = {
    simpleName: 'SelectClause2',
    kind: 'interface',
    interfaces: []
  };
  var UNLOCK_FAIL;
  var LOCKED;
  var UNLOCKED;
  var EMPTY_LOCKED;
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this._locked = locked;
  }
  Empty_0.prototype.toString = function () {
    return '' + 'Empty[' + this._locked + ']';
  };
  Empty_0.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: []
  };
  function Mutex() {
  }
  Mutex.$metadata$ = {
    simpleName: 'Mutex',
    kind: 'interface',
    interfaces: []
  };
  function Mutex_0(locked) {
    return new MutexImpl(locked);
  }
  function Mutex$default(locked, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      locked = false;
    return Mutex_0(locked);
  }
  function _no_name_provided__41(this$0, this$1) {
    this._this$0_7 = this$0;
    this._this$1 = this$1;
  }
  _no_name_provided__41.prototype.invoke_93 = function (it) {
    this._this$0_7.unlock_0(this._this$1._get_owner__0());
  };
  _no_name_provided__41.prototype.invoke_166 = function (p1) {
    this.invoke_93(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function lockSuspend($this, owner, $cont) {
    var tmp0__anonymous__1_1 = $cont;
    var cancellable_2_2 = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__1_1));
    var tmp$ret$0;
    l$ret$1: do {
      var waiter_4 = new LockCont($this, owner, cancellable_2_2);
      var tmp0_loop_0_5 = $this.__state_4;
      while (true) {
        var tmp1__anonymous__1_6 = tmp0_loop_0_5._value_0;
        var tmp0_subject_2_7 = tmp1__anonymous__1_6;
        if (tmp0_subject_2_7 instanceof Empty_0) {
          if (!(tmp1__anonymous__1_6._locked === UNLOCKED)) {
            $this.__state_4.compareAndSet$atomicfu(tmp1__anonymous__1_6, new LockedQueue(tmp1__anonymous__1_6._locked));
            Unit_getInstance();
          } else {
            var update_3_8 = owner == null ? EMPTY_LOCKED : new Empty_0(owner);
            if ($this.__state_4.compareAndSet$atomicfu(tmp1__anonymous__1_6, update_3_8)) {
              cancellable_2_2.resume_0(Unit_getInstance(), _no_name_provided_$factory_35($this, owner));
              tmp$ret$0 = Unit_getInstance();
              break l$ret$1;
            }}
        } else {
          if (tmp0_subject_2_7 instanceof LockedQueue) {
            var curOwner_5_10 = tmp1__anonymous__1_6._owner;
            var tmp0_check_0_6_11 = !(curOwner_5_10 === owner);
            if (!tmp0_check_0_6_11) {
              var message_1_7_12 = '' + 'Already locked by ' + owner;
              throw IllegalStateException_init_$Create$(toString_1(message_1_7_12));
            }var tmp$ret$2;
            l$ret$3: do {
              var tmp1_addLastIf_0_8_13 = tmp1__anonymous__1_6;
              if (!($this.__state_4._value_0 === tmp1__anonymous__1_6)) {
                tmp$ret$2 = false;
                break l$ret$3;
              } else {
              }
              tmp1_addLastIf_0_8_13.addLast_22(waiter_4);
              tmp$ret$2 = true;
            }
             while (false);
            if (tmp$ret$2) {
              removeOnCancellation(cancellable_2_2, waiter_4);
              tmp$ret$0 = Unit_getInstance();
              break l$ret$1;
            } else {
            }
          } else {
            if (tmp0_subject_2_7 instanceof OpDescriptor) {
              tmp1__anonymous__1_6.perform_1($this);
              Unit_getInstance();
            } else {
              {
                var tmp2_error_0_9_14 = '' + 'Illegal state ' + tmp1__anonymous__1_6;
                throw IllegalStateException_init_$Create$(toString_1(tmp2_error_0_9_14));
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
     while (false);
    return cancellable_2_2.getResult();
  }
  function LockedQueue(owner) {
    LinkedListHead.call(this);
    this._owner = owner;
  }
  LockedQueue.prototype.toString = function () {
    return '' + 'LockedQueue[' + this._owner + ']';
  };
  LockedQueue.$metadata$ = {
    simpleName: 'LockedQueue',
    kind: 'class',
    interfaces: []
  };
  function LockWaiter($outer, owner) {
    this._$this_5 = $outer;
    LinkedListNode.call(this);
    this._owner_0 = owner;
  }
  LockWaiter.prototype._get_owner__0 = function () {
    return this._owner_0;
  };
  LockWaiter.prototype.dispose_10 = function () {
    this.remove_19();
    Unit_getInstance();
  };
  LockWaiter.$metadata$ = {
    simpleName: 'LockWaiter',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function LockCont($outer, owner, cont) {
    this._$this_6 = $outer;
    LockWaiter.call(this, $outer, owner);
    this._cont_0 = cont;
  }
  LockCont.prototype.tryResumeLockWaiter_0 = function () {
    return this._cont_0.tryResume_0(Unit_getInstance(), null, _no_name_provided_$factory_36(this._$this_6, this));
  };
  LockCont.prototype.completeResumeLockWaiter_0 = function (token) {
    return this._cont_0.completeResume_0(token);
  };
  LockCont.prototype.toString = function () {
    return '' + 'LockCont[' + this._get_owner__0() + ', ' + this._cont_0 + '] for ' + this._$this_6;
  };
  LockCont.$metadata$ = {
    simpleName: 'LockCont',
    kind: 'class',
    interfaces: []
  };
  function UnlockOp(queue) {
    AtomicOp.call(this);
    this._queue_0 = queue;
  }
  UnlockOp.prototype.prepare_0 = function (affected) {
    return this._queue_0._get_isEmpty__4() ? null : UNLOCK_FAIL;
  };
  UnlockOp.prototype.prepare_1 = function (affected) {
    return this.prepare_0(affected instanceof MutexImpl ? affected : THROW_CCE());
  };
  UnlockOp.prototype.complete_1 = function (affected, failure) {
    var update = failure == null ? EMPTY_UNLOCKED : this._queue_0;
    affected.__state_4.compareAndSet$atomicfu(this, update);
    Unit_getInstance();
  };
  UnlockOp.prototype.complete_2 = function (affected, failure) {
    return this.complete_1(affected instanceof MutexImpl ? affected : THROW_CCE(), failure);
  };
  UnlockOp.$metadata$ = {
    simpleName: 'UnlockOp',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__42(this$0, $owner) {
    this._this$0_8 = this$0;
    this._$owner = $owner;
  }
  _no_name_provided__42.prototype.invoke_93 = function (it) {
    this._this$0_8.unlock_0(this._$owner);
  };
  _no_name_provided__42.prototype.invoke_166 = function (p1) {
    this.invoke_93(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function MutexImpl(locked) {
    this.__state_4 = atomic(locked ? EMPTY_LOCKED : EMPTY_UNLOCKED);
  }
  MutexImpl.prototype.tryLock = function (owner) {
    var tmp0_loop_0 = this.__state_4;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (tmp0_subject_2 instanceof Empty_0) {
        if (!(tmp1__anonymous__1._locked === UNLOCKED))
          return false;
        var update_3 = owner == null ? EMPTY_LOCKED : new Empty_0(owner);
        if (this.__state_4.compareAndSet$atomicfu(tmp1__anonymous__1, update_3))
          return true;
      } else {
        if (tmp0_subject_2 instanceof LockedQueue) {
          var tmp0_check_0_4 = !(tmp1__anonymous__1._owner === owner);
          if (!tmp0_check_0_4) {
            var message_1_5 = '' + 'Already locked by ' + owner;
            throw IllegalStateException_init_$Create$(toString_1(message_1_5));
          }return false;
        } else {
          if (tmp0_subject_2 instanceof OpDescriptor) {
            tmp1__anonymous__1.perform_1(this);
            Unit_getInstance();
          } else {
            {
              var tmp1_error_0_6 = '' + 'Illegal state ' + tmp1__anonymous__1;
              throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_6));
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  MutexImpl.prototype.lock_0 = function (owner, $cont) {
    if (this.tryLock(owner))
      return Unit_getInstance();
    return lockSuspend(this, owner, $cont);
  };
  MutexImpl.prototype.unlock_0 = function (owner) {
    var tmp0_loop_0 = this.__state_4;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (tmp0_subject_2 instanceof Empty_0) {
        if (owner == null) {
          var tmp0_check_0_3 = !(tmp1__anonymous__1._locked === UNLOCKED);
          if (!tmp0_check_0_3) {
            var message_1_4 = 'Mutex is not locked';
            throw IllegalStateException_init_$Create$(toString_1(message_1_4));
          }} else {
          var tmp1_check_0_5 = tmp1__anonymous__1._locked === owner;
          if (!tmp1_check_0_5) {
            var message_1_6 = '' + 'Mutex is locked by ' + tmp1__anonymous__1._locked + ' but expected ' + owner;
            throw IllegalStateException_init_$Create$(toString_1(message_1_6));
          }}
        if (this.__state_4.compareAndSet$atomicfu(tmp1__anonymous__1, EMPTY_UNLOCKED))
          return Unit_getInstance();
      } else {
        if (tmp0_subject_2 instanceof OpDescriptor) {
          tmp1__anonymous__1.perform_1(this);
          Unit_getInstance();
        } else {
          if (tmp0_subject_2 instanceof LockedQueue) {
            if (!(owner == null)) {
              var tmp2_check_0_7 = tmp1__anonymous__1._owner === owner;
              if (!tmp2_check_0_7) {
                var message_1_8 = '' + 'Mutex is locked by ' + tmp1__anonymous__1._owner + ' but expected ' + owner;
                throw IllegalStateException_init_$Create$(toString_1(message_1_8));
              }}var waiter_9 = tmp1__anonymous__1.removeFirstOrNull_4();
            if (waiter_9 == null) {
              var op_10 = new UnlockOp(tmp1__anonymous__1);
              if (this.__state_4.compareAndSet$atomicfu(tmp1__anonymous__1, op_10) ? op_10.perform_1(this) == null : false)
                return Unit_getInstance();
            } else {
              var token_11 = (waiter_9 instanceof LockWaiter ? waiter_9 : THROW_CCE()).tryResumeLockWaiter_0();
              if (!(token_11 == null)) {
                var tmp = tmp1__anonymous__1;
                var tmp1_elvis_lhs_12 = waiter_9._owner_0;
                tmp._owner = tmp1_elvis_lhs_12 == null ? LOCKED : tmp1_elvis_lhs_12;
                waiter_9.completeResumeLockWaiter_0(token_11);
                return Unit_getInstance();
              }}
          } else {
            {
              var tmp3_error_0_13 = '' + 'Illegal state ' + tmp1__anonymous__1;
              throw IllegalStateException_init_$Create$(toString_1(tmp3_error_0_13));
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  MutexImpl.prototype.toString = function () {
    var tmp0_loop_0 = this.__state_4;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (tmp0_subject_2 instanceof Empty_0)
        return '' + 'Mutex[' + tmp1__anonymous__1._locked + ']';
      else {
        if (tmp0_subject_2 instanceof OpDescriptor) {
          tmp1__anonymous__1.perform_1(this);
          Unit_getInstance();
        } else {
          if (tmp0_subject_2 instanceof LockedQueue)
            return '' + 'Mutex[' + tmp1__anonymous__1._owner + ']';
          else {
            {
              var tmp0_error_0_3 = '' + 'Illegal state ' + tmp1__anonymous__1;
              throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  MutexImpl.$metadata$ = {
    simpleName: 'MutexImpl',
    kind: 'class',
    interfaces: [Mutex, SelectClause2]
  };
  function _no_name_provided_$factory_35(this$0, $owner) {
    var i = new _no_name_provided__42(this$0, $owner);
    return function (p1) {
      i.invoke_93(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_36(this$0, this$1) {
    var i = new _no_name_provided__41(this$0, this$1);
    return function (p1) {
      i.invoke_93(p1);
      return Unit_getInstance();
    };
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this_, cause) {
    var tmp0_subject = typeof _this_;
    if (tmp0_subject === 'function')
      _this_(cause);
    else {
      _this_.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this_) {
    return toString_1(_this_);
  }
  function newCoroutineContext(_this_, context) {
    var combined = _this_._get_coroutineContext__6().plus_23(context);
    return (!(combined === Dispatchers_getInstance()._Default) ? combined.get_39(Key_getInstance()) == null : false) ? combined.plus_23(Dispatchers_getInstance()._Default) : combined;
  }
  function createDefaultDispatcher() {
    var tmp;
    if ((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.product == 'ReactNative' : false) {
      tmp = NodeDispatcher_getInstance();
    } else {
      if (isJsdom()) {
        tmp = NodeDispatcher_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        if (!(typeof window === 'undefined')) {
          var tmp0_asDynamic_0 = window;
          tmp_1 = tmp0_asDynamic_0 != null;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp1_asDynamic_0 = window;
          tmp_0 = !(typeof tmp1_asDynamic_0.addEventListener === 'undefined');
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp = asCoroutineDispatcher(window);
        } else {
          if (typeof process === 'undefined') {
            tmp = SetTimeoutDispatcher_getInstance();
          } else {
            {
              tmp = NodeDispatcher_getInstance();
            }
          }
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function _get_coroutineName_(_this_) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.error.apply($externalVarargReceiverTmp, [].concat([exception]));
    }.call(this));
  }
  var counter;
  var DEBUG;
  function _get_classSimpleName_(_this_) {
    var tmp0_elvis_lhs = getKClassFromExpression_0(_this_)._get_simpleName__4();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress_(_this_) {
    var result = _this_.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      _this_.__debug_counter = result;
    }return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this._Default = createDefaultDispatcher();
    this._Main = new JsMainDispatcher(this._Default, false);
    this._Unconfined = Unconfined_getInstance();
  }
  Dispatchers.$metadata$ = {
    simpleName: 'Dispatchers',
    kind: 'object',
    interfaces: []
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this._delegate_0 = delegate;
    this._invokeImmediately = invokeImmediately;
    this._immediate = this._invokeImmediately ? this : new JsMainDispatcher(this._delegate_0, true);
  }
  JsMainDispatcher.prototype._get_immediate__0 = function () {
    return this._immediate;
  };
  JsMainDispatcher.prototype.isDispatchNeeded_8 = function (context) {
    return !this._invokeImmediately;
  };
  JsMainDispatcher.prototype.dispatch_8 = function (context, block) {
    return this._delegate_0.dispatch_8(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0();
    return tmp0_elvis_lhs == null ? this._delegate_0.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = {
    simpleName: 'JsMainDispatcher',
    kind: 'class',
    interfaces: []
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_8 = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$_0('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException.call(this, message, cause);
    this._job_0 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return '' + CancellationException.prototype.toString.call(this) + '; job=' + this._job_0;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals_0(other._job_0, this._job_0);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals_0(other.cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this._job_0) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function CancellationException_init_$Init$(message, $this) {
    CancellationException.call($this, message, null);
    return $this;
  }
  function CancellationException_init_$Create$(message) {
    var tmp = CancellationException_init_$Init$(message, Object.create(CancellationException.prototype));
    captureStack(tmp, CancellationException_init_$Create$);
    return tmp;
  }
  function CancellationException(message, cause) {
    IllegalStateException_init_$Init$_0(message, cause, this);
    captureStack(this, CancellationException);
  }
  CancellationException.$metadata$ = {
    simpleName: 'CancellationException',
    kind: 'class',
    interfaces: []
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_1 = function () {
    process.nextTick(this._get_messageQueue__1()._processQueue);
  };
  NodeDispatcher.$metadata$ = {
    simpleName: 'NodeDispatcher',
    kind: 'object',
    interfaces: []
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_1 = function () {
    setTimeout(this._get_messageQueue__1()._processQueue, 0);
    Unit_getInstance();
  };
  SetTimeoutDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutDispatcher',
    kind: 'object',
    interfaces: []
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function _no_name_provided__43(this$0) {
    this._this$0_9 = this$0;
  }
  _no_name_provided__43.prototype.invoke_123 = function () {
    this._this$0_9.process_1();
  };
  _no_name_provided__43.prototype.invoke_124 = function () {
    this.invoke_123();
    return Unit_getInstance();
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ScheduledMessageQueue($outer) {
    this._$this_7 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp._processQueue = _no_name_provided_$factory_37(this);
  }
  ScheduledMessageQueue.prototype.schedule_1 = function () {
    this._$this_7.scheduleQueueProcessing_1();
  };
  ScheduledMessageQueue.prototype.reschedule_1 = function () {
    setTimeout(this._processQueue, 0);
    Unit_getInstance();
  };
  ScheduledMessageQueue.$metadata$ = {
    simpleName: 'ScheduledMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this._messageQueue = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype._get_messageQueue__1 = function () {
    return this._messageQueue;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_8 = function (context, block) {
    this._messageQueue.enqueue_1(block);
  };
  SetTimeoutBasedDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutBasedDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this._yieldEvery = 16;
    this._scheduled = false;
  }
  MessageQueue.prototype.enqueue_1 = function (element) {
    this.addLast_13(element);
    if (!this._scheduled) {
      this._scheduled = true;
      this.schedule_1();
    }};
  MessageQueue.prototype.process_1 = function () {
    try {
      var tmp0_repeat_0 = this._yieldEvery;
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs_5 = this.removeFirstOrNull_4();
          var tmp;
          if (tmp0_elvis_lhs_5 == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs_5;
          }
          var element_4 = tmp;
          element_4.run_3();
        }
         while (inductionVariable < tmp0_repeat_0);
    }finally {
      if (this._get_isEmpty__4()) {
        this._scheduled = false;
      } else {
        this.reschedule_1();
      }
    }
  };
  MessageQueue.$metadata$ = {
    simpleName: 'MessageQueue',
    kind: 'class',
    interfaces: []
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this._window = window_0;
    this._queue_1 = new WindowMessageQueue(this._window);
  }
  WindowDispatcher.prototype.dispatch_8 = function (context, block) {
    return this._queue_1.enqueue_1(block);
  };
  WindowDispatcher.$metadata$ = {
    simpleName: 'WindowDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _no_name_provided__44(this$0) {
    this._this$0_10 = this$0;
  }
  _no_name_provided__44.prototype.invoke_87 = function (event) {
    if (event.source == this._this$0_10._window_0 ? event.data == this._this$0_10._messageName : false) {
      event.stopPropagation();
      this._this$0_10.process_1();
    }};
  _no_name_provided__44.prototype.invoke_166 = function (p1) {
    this.invoke_87((p1 == null ? true : p1) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__45(this$0) {
    this._this$0_11 = this$0;
  }
  _no_name_provided__45.prototype.invoke_111 = function (it) {
    this._this$0_11.process_1();
  };
  _no_name_provided__45.prototype.invoke_166 = function (p1) {
    this.invoke_111(p1 instanceof Unit ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this._window_0 = window_0;
    this._messageName = 'dispatchCoroutine';
    this._window_0.addEventListener('message', _no_name_provided_$factory_38(this), true);
  }
  WindowMessageQueue.prototype.schedule_1 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(_no_name_provided_$factory_39(this));
    Unit_getInstance();
  };
  WindowMessageQueue.prototype.reschedule_1 = function () {
    this._window_0.postMessage(this._messageName, '*');
  };
  WindowMessageQueue.$metadata$ = {
    simpleName: 'WindowMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_37(this$0) {
    var i = new _no_name_provided__43(this$0);
    return function () {
      i.invoke_123();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_38(this$0) {
    var i = new _no_name_provided__44(this$0);
    return function (p1) {
      i.invoke_87(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_39(this$0) {
    var i = new _no_name_provided__45(this$0);
    return function (p1) {
      i.invoke_111(p1);
      return Unit_getInstance();
    };
  }
  function await_0(_this_, $cont) {
    var tmp0__anonymous__1_1 = $cont;
    var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
    cancellable_2_2.initCancellability();
    var tmp = _no_name_provided_$factory_40(cancellable_2_2);
    _this_.then(tmp, _no_name_provided_$factory_41(cancellable_2_2));
    Unit_getInstance();
    return cancellable_2_2.getResult();
  }
  function _no_name_provided__46($cancellable_2_2) {
    this._$cancellable_2_2_0 = $cancellable_2_2;
  }
  _no_name_provided__46.prototype.invoke_91 = function (it) {
    var tmp0_success_0_1_5 = Companion_getInstance_2();
    this._$cancellable_2_2_0.resumeWith_27(_Result___init__impl_(it));
  };
  _no_name_provided__46.prototype.invoke_166 = function (p1) {
    this.invoke_91((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47($cancellable_2_2) {
    this._$cancellable_2_2_1 = $cancellable_2_2;
  }
  _no_name_provided__47.prototype.invoke_93 = function (it) {
    var tmp0_failure_0_1_7 = Companion_getInstance_2();
    this._$cancellable_2_2_1.resumeWith_27(_Result___init__impl_(createFailure(it)));
  };
  _no_name_provided__47.prototype.invoke_166 = function (p1) {
    this.invoke_93(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_40($cancellable_2_2) {
    var i = new _no_name_provided__46($cancellable_2_2);
    return function (p1) {
      i.invoke_91(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_41($cancellable_2_2) {
    var i = new _no_name_provided__47($cancellable_2_2);
    return function (p1) {
      i.invoke_93(p1);
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext_(_this_) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this_) {
    var tmp0_elvis_lhs = _this_.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = new WindowDispatcher(_this_);
      _this_.coroutineDispatcher = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _no_name_provided__48() {
  }
  _no_name_provided__48.prototype.invoke_95 = function (count, _anonymous_parameter_1_) {
    return count + 1 | 0;
  };
  _no_name_provided__48.prototype.invoke_134 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE();
    return this.invoke_95(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__48.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SafeCollector(collector, collectContext) {
    this._collector_5 = collector;
    this._collectContext = collectContext;
    var tmp = this;
    tmp._collectContextSize = this._collectContext.fold_22(0, _no_name_provided_$factory_42());
    this._lastEmissionContext = null;
  }
  SafeCollector.prototype.emit_9 = function (value, $cont) {
    var currentContext = $cont._get_context__47();
    ensureActive_0(currentContext);
    if (!(this._lastEmissionContext === currentContext)) {
      checkContext(this, currentContext);
      this._lastEmissionContext = currentContext;
    }return this._collector_5.emit_9(value, $cont);
  };
  SafeCollector.prototype.releaseIntercepted = function () {
  };
  SafeCollector.$metadata$ = {
    simpleName: 'SafeCollector',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function _no_name_provided_$factory_42() {
    var i = new _no_name_provided__48();
    return function (p1, p2) {
      return i.invoke_95(p1, p2);
    };
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.$metadata$ = {
    simpleName: 'NoOpLock',
    kind: 'class',
    interfaces: []
  };
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype._get_isEmpty__4 = function () {
    return this._get__next__2() === this;
  };
  LinkedListHead.prototype.remove_19 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this.__next = this;
    this.__prev = this;
    this.__removed = false;
  }
  LinkedListNode.prototype._get__next__2 = function () {
    return this.__next;
  };
  LinkedListNode.prototype.addLast_22 = function (node) {
    var prev = this.__prev;
    node.__next = this;
    node.__prev = prev;
    prev.__next = node;
    this.__prev = node;
  };
  LinkedListNode.prototype.remove_19 = function () {
    if (this.__removed)
      return false;
    var prev = this.__prev;
    var next = this.__next;
    prev.__next = next;
    next.__prev = prev;
    this.__removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_6 = function (node) {
    if (!(this.__next === this))
      return false;
    this.addLast_22(node);
    return true;
  };
  LinkedListNode.prototype.helpRemove_18 = function () {
  };
  LinkedListNode.prototype.removeFirstOrNull_4 = function () {
    var next = this.__next;
    if (next === this)
      return null;
    var tmp0_check_0 = next.remove_19();
    if (!tmp0_check_0) {
      var message_1 = 'Should remove';
      throw IllegalStateException_init_$Create$(toString_1(message_1));
    }return next;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this._value_7 = null;
  }
  CommonThreadLocal.prototype.get_40 = function () {
    var tmp = this._value_7;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_0 = function (value) {
    this._value_7 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  function LensException() {
  }
  LensException.$metadata$ = {
    simpleName: 'LensException',
    kind: 'class',
    interfaces: []
  };
  function SimpleHandler(collect_0) {
    this._collect = collect_0;
  }
  SimpleHandler.prototype._get_collect__0 = function () {
    return this._collect;
  };
  SimpleHandler.$metadata$ = {
    simpleName: 'SimpleHandler',
    kind: 'class',
    interfaces: [Handler]
  };
  function Handler() {
  }
  Handler.$metadata$ = {
    simpleName: 'Handler',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided__1_7_3_3($collector) {
    this._$collector_3 = $collector;
  }
  _no_name_provided__1_7_3_3.prototype.emit_2_8_4_4 = function (value, $cont) {
    return this._$collector_3.emit_9(Unit_getInstance(), $cont);
  };
  _no_name_provided__1_7_3_3.prototype.emit_9 = function (value, $cont) {
    return this.emit_2_8_4_4(value instanceof Event ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__1_7_3_3.$metadata$ = {
    simpleName: '<no name provided>_1_7_3_3',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $collect_2_2_2COROUTINE$1(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__13 = _this_;
    this._collector_6 = collector;
  }
  $collect_2_2_2COROUTINE$1.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this.__this__13._$tmp0_map_0.collect_12(new _no_name_provided__1_7_3_3(this._collector_6), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collect_2_2_2COROUTINE$1.$metadata$ = {
    simpleName: '$collect_2_2_2COROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_1_1($tmp0_map_0) {
    this._$tmp0_map_0 = $tmp0_map_0;
  }
  _no_name_provided__1_1_1.prototype.collect_2_2_2 = function (collector, $cont) {
    var tmp = new $collect_2_2_2COROUTINE$1(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_1_1.prototype.collect_12 = function (collector, $cont) {
    return this.collect_2_2_2(collector, $cont);
  };
  _no_name_provided__1_1_1.$metadata$ = {
    simpleName: '<no name provided>_1_1_1',
    kind: 'class',
    interfaces: [Flow]
  };
  function WithJob() {
  }
  WithJob.prototype.handledBy_1 = function (_this__0, handler) {
    return handler._get_collect__0()(_this__0, this._get_job__15());
  };
  WithJob.prototype.handledBy_2 = function (_this__0, handler) {
    var tmp = handler._get_collect__0();
    var tmp0_map_0 = _this__0._get_events__0();
    return tmp(new _no_name_provided__1_1_1(tmp0_map_0), this._get_job__15());
  };
  WithJob.$metadata$ = {
    simpleName: 'WithJob',
    kind: 'interface',
    interfaces: []
  };
  function mountSingle(parentJob, upstream, set) {
    var tmp = plus_0(MainScope(), parentJob);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch$default(tmp, null, tmp_0, _no_name_provided_$factory_43(upstream, set, null), 1, null);
    Unit_getInstance();
  }
  function _no_name_provided__49($set, resultContinuation) {
    this._$set = $set;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__49.prototype.invoke_97 = function (last, value, $cont) {
    var tmp = this.create_2(last, value, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__49.prototype.invoke_134 = function (p1, p2, $cont) {
    var tmp = (p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE();
    return this.invoke_97(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $cont);
  };
  _no_name_provided__49.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this._$set(this._value_8, this._last_2, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return this._value_8;
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__49.prototype.create_2 = function (last, value, completion) {
    var i = new _no_name_provided__49(this._$set, completion);
    i._last_2 = last;
    i._value_8 = value;
    return i;
  };
  _no_name_provided__49.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 2
  };
  function _no_name_provided__50($this_launch, resultContinuation) {
    this._$this_launch = $this_launch;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__50.prototype.invoke_99 = function ($this$catch, it, $cont) {
    var tmp = this.create_3($this$catch, it, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__50.prototype.invoke_134 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    this.invoke_99(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__50.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          var tmp0_subject = this._it_0;
          if (tmp0_subject instanceof LensException) {
          } else {
            (function () {
              var $externalVarargReceiverTmp = console;
              return $externalVarargReceiverTmp.error.apply($externalVarargReceiverTmp, [].concat([this._it_0]));
            }.call(this));
          }
          cancel(this._$this_launch, 'error mounting', this._it_0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__50.prototype.create_3 = function ($this$catch, it, completion) {
    var i = new _no_name_provided__50(this._$this_launch, completion);
    i._$this$catch = $this$catch;
    i._it_0 = it;
    return i;
  };
  _no_name_provided__50.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 2
  };
  function _no_name_provided__51($upstream, $set, resultContinuation) {
    this._$upstream = $upstream;
    this._$set_0 = $set;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__51.prototype.invoke_101 = function ($this$launch, $cont) {
    var tmp = this.create_4($this$launch, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__51.prototype.invoke_166 = function (p1, $cont) {
    this.invoke_101((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__51.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            var tmp_0 = scan(this._$upstream, null, _no_name_provided_$factory_44(this._$set_0, null));
            suspendResult = collect(catch_0(tmp_0, _no_name_provided_$factory_45(this._$this$launch, null)), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__51.prototype.create_4 = function ($this$launch, completion) {
    var i = new _no_name_provided__51(this._$upstream, this._$set_0, completion);
    i._$this$launch = $this$launch;
    return i;
  };
  _no_name_provided__51.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided_$factory_43($upstream, $set, resultContinuation) {
    var i = new _no_name_provided__51($upstream, $set, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_101(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_44($set, resultContinuation) {
    var i = new _no_name_provided__49($set, resultContinuation);
    var l = function (p1, p2, $cont) {
      return i.invoke_97(p1, p2, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _no_name_provided_$factory_45($this_launch, resultContinuation) {
    var i = new _no_name_provided__50($this_launch, resultContinuation);
    var l = function (p1, p2, $cont) {
      return i.invoke_99(p1, p2, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function RootStore_init_$Init$(initialData, id, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      id = '';
    RootStore.call($this, initialData, id);
    return $this;
  }
  function _no_name_provided__52(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__52.prototype.invoke_103 = function (_anonymous_parameter_0_, newValue, $cont) {
    var tmp = this.create_5(_anonymous_parameter_0_, newValue, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__52.prototype.invoke_134 = function (p1, p2, $cont) {
    var tmp = (p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE();
    return this.invoke_103(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $cont);
  };
  _no_name_provided__52.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          return this._newValue;
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__52.prototype.create_5 = function (_anonymous_parameter_0_, newValue, completion) {
    var i = new _no_name_provided__52(completion);
    i.__anonymous_parameter_0_ = _anonymous_parameter_0_;
    i._newValue = newValue;
    return i;
  };
  _no_name_provided__52.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 2
  };
  function $enqueueCOROUTINE$3(_this_, update, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__14 = _this_;
    this._update = update;
  }
  $enqueueCOROUTINE$3.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 11;
            this._exceptionState = 10;
            this._state_0 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0._tmp0_withLock_01 = this.__this__14._mutex;
            var tmp_1 = this;
            tmp_1._tmp1_withLock_02 = null;
            this._state_0 = 2;
            suspendResult = this._tmp0_withLock_01.lock_0(this._tmp1_withLock_02, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            suspendResult;
            this._state_0 = 3;
            continue $sm;
          case 3:
            this._state_0 = 4;
            continue $sm;
          case 4:
            this._exceptionState = 9;
            this._ARGUMENT5 = this.__this__14._state_3;
            this._state_0 = 5;
            suspendResult = this._update._update_1(this.__this__14._state_3._get_value__7(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 5:
            var ARGUMENT = suspendResult;
            this._tmp$ret$04 = this._ARGUMENT5._set_value__3(ARGUMENT);
            this._state_0 = 6;
            var tmp_2 = this;
            continue $sm;
          case 6:
            var tmp_3 = this;
            tmp_3._tmp$ret$40 = this._tmp0_withLock_01.unlock_0(this._tmp1_withLock_02);
            this._state_0 = 8;
            continue $sm;
          case 7:
            this._tmp0_withLock_01.unlock_0(this._tmp1_withLock_02);
            if (false) {
              this._state_0 = 1;
              continue $sm;
            }
            this._state_0 = 8;
            continue $sm;
          case 8:
            this._exceptionState = 11;
            this._state_0 = 12;
            continue $sm;
          case 9:
            this._exceptionState = 10;
            var t = this._exception_0;
            this._tmp0_withLock_01.unlock_0(this._tmp1_withLock_02);
            throw t;
          case 10:
            this._exceptionState = 11;
            var tmp_4 = this._exception_0;
            if (tmp_4 instanceof Error) {
              var e = this._exception_0;
              this._update._errorHandler(e, this.__this__14._state_3._get_value__7());
              Unit_getInstance();
              this._state_0 = 12;
              continue $sm;
            } else {
              {
                throw this._exception_0;
              }
            }

            break;
          case 11:
            throw this._exception_0;
          case 12:
            this._exceptionState = 11;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this._exceptionState === 11) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $enqueueCOROUTINE$3.$metadata$ = {
    simpleName: '$enqueueCOROUTINE$3',
    kind: 'class',
    interfaces: []
  };
  function RootStore(initialData, id) {
    this._id = id;
    this._state_3 = MutableStateFlow_0(initialData);
    var tmp = this;
    tmp._mutex = Mutex$default(false, 1, null);
    var tmp_0 = this;
    tmp_0._job_1 = Job$default(null, 1, null);
    this._data = asStateFlow(this._state_3);
    var tmp_1 = this;
    tmp_1._update_0 = this.handle$default_1(null, _no_name_provided_$factory_46(null), 1, null);
  }
  RootStore.prototype._get_id__1 = function () {
    return this._id;
  };
  RootStore.prototype._get_job__15 = function () {
    return this._job_1;
  };
  RootStore.prototype._get_data__0 = function () {
    return this._data;
  };
  RootStore.prototype.enqueue_3 = function (update, $cont) {
    var tmp = new $enqueueCOROUTINE$3(this, update, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  RootStore.$metadata$ = {
    simpleName: 'RootStore',
    kind: 'class',
    interfaces: [Store]
  };
  function _no_name_provided__53($execute, $it, resultContinuation) {
    this._$execute = $execute;
    this._$it = $it;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__53.prototype.invoke_109 = function (t, $cont) {
    var tmp = this.create_8(t, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__53.prototype.invoke_166 = function (p1, $cont) {
    return this.invoke_109((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__53.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this._$execute(this._t, this._$it, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__53.prototype.create_8 = function (t, completion) {
    var i = new _no_name_provided__53(this._$execute, this._$it, completion);
    i._t = t;
    return i;
  };
  _no_name_provided__53.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided__54(this$0, $errorHandler, $execute, resultContinuation) {
    this._this$0_12 = this$0;
    this._$errorHandler = $errorHandler;
    this._$execute_0 = $execute;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__54.prototype.invoke_107 = function (it, $cont) {
    var tmp = this.create_7(it, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__54.prototype.invoke_166 = function (p1, $cont) {
    this.invoke_107((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__54.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this._this$0_12.enqueue_3(new QueuedUpdate(_no_name_provided_$factory_52(this._$execute_0, this._it_1, null), this._$errorHandler), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__54.prototype.create_7 = function (it, completion) {
    var i = new _no_name_provided__54(this._this$0_12, this._$errorHandler, this._$execute_0, completion);
    i._it_1 = it;
    return i;
  };
  _no_name_provided__54.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided__55($execute, resultContinuation) {
    this._$execute_1 = $execute;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__55.prototype.invoke_109 = function (t, $cont) {
    var tmp = this.create_8(t, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__55.prototype.invoke_166 = function (p1, $cont) {
    return this.invoke_109((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__55.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this._$execute_1(this._t_0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__55.prototype.create_8 = function (t, completion) {
    var i = new _no_name_provided__55(this._$execute_1, completion);
    i._t_0 = t;
    return i;
  };
  _no_name_provided__55.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided__56(this$0, $errorHandler, $execute, resultContinuation) {
    this._this$0_13 = this$0;
    this._$errorHandler_0 = $errorHandler;
    this._$execute_2 = $execute;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__56.prototype.invoke_111 = function (it, $cont) {
    var tmp = this.create_9(it, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__56.prototype.invoke_166 = function (p1, $cont) {
    this.invoke_111(p1 instanceof Unit ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__56.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this._this$0_13.enqueue_3(new QueuedUpdate(_no_name_provided_$factory_54(this._$execute_2, null), this._$errorHandler_0), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__56.prototype.create_9 = function (it, completion) {
    var i = new _no_name_provided__56(this._this$0_13, this._$errorHandler_0, this._$execute_2, completion);
    i._it_2 = it;
    return i;
  };
  _no_name_provided__56.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided__57($boundThis) {
    this._$boundThis = $boundThis;
  }
  _no_name_provided__57.prototype.invoke_117 = function (p0, p1) {
    return this._$boundThis.errorHandler_0(p0, p1);
  };
  _no_name_provided__57.prototype.invoke_134 = function (p1, p2) {
    var tmp = p1 instanceof Error ? p1 : THROW_CCE();
    return this.invoke_117(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE());
  };
  _no_name_provided__57.prototype._get_name__0 = function () {
    return 'errorHandler';
  };
  _no_name_provided__57.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__58(this$0, $errorHandler, $execute) {
    this._this$0_14 = this$0;
    this._$errorHandler_1 = $errorHandler;
    this._$execute_3 = $execute;
  }
  _no_name_provided__58.prototype.invoke_115 = function (flow, job) {
    launchIn(onEach(flow, _no_name_provided_$factory_51(this._this$0_14, this._$errorHandler_1, this._$execute_3, null)), plus_0(MainScope(), job));
    Unit_getInstance();
  };
  _no_name_provided__58.prototype.invoke_134 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, Flow) : false) ? p1 : THROW_CCE();
    this.invoke_115(tmp, (!(p2 == null) ? isInterface(p2, Job) : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__58.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__59($boundThis) {
    this._$boundThis_0 = $boundThis;
  }
  _no_name_provided__59.prototype.invoke_117 = function (p0, p1) {
    return this._$boundThis_0.errorHandler_0(p0, p1);
  };
  _no_name_provided__59.prototype.invoke_134 = function (p1, p2) {
    var tmp = p1 instanceof Error ? p1 : THROW_CCE();
    return this.invoke_117(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE());
  };
  _no_name_provided__59.prototype._get_name__0 = function () {
    return 'errorHandler';
  };
  _no_name_provided__59.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__60(this$0, $errorHandler, $execute) {
    this._this$0_15 = this$0;
    this._$errorHandler_2 = $errorHandler;
    this._$execute_4 = $execute;
  }
  _no_name_provided__60.prototype.invoke_119 = function (flow, job) {
    launchIn(onEach(flow, _no_name_provided_$factory_53(this._this$0_15, this._$errorHandler_2, this._$execute_4, null)), plus_0(MainScope(), job));
    Unit_getInstance();
  };
  _no_name_provided__60.prototype.invoke_134 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, Flow) : false) ? p1 : THROW_CCE();
    this.invoke_119(tmp, (!(p2 == null) ? isInterface(p2, Job) : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__60.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Store() {
  }
  Store.prototype.errorHandler_0 = function (exception, oldValue) {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.error.apply($externalVarargReceiverTmp, [].concat(['' + 'ERROR[' + this._get_id__1() + ']: ' + exception.message, exception]));
    }.call(this));
    return oldValue;
  };
  Store.prototype.handle_1 = function (errorHandler, execute_0) {
    return new SimpleHandler(_no_name_provided_$factory_48(this, errorHandler, execute_0));
  };
  Store.prototype.handle$default_1 = function (errorHandler, execute_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      errorHandler = _no_name_provided_$factory_47(this);
    }return $handler == null ? this.handle_1(errorHandler, execute_0) : $handler(errorHandler, execute_0);
  };
  Store.prototype.handle_2 = function (errorHandler, execute_0) {
    return new SimpleHandler(_no_name_provided_$factory_50(this, errorHandler, execute_0));
  };
  Store.prototype.handle$default_2 = function (errorHandler, execute_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      errorHandler = _no_name_provided_$factory_49(this);
    }return $handler == null ? this.handle_2(errorHandler, execute_0) : $handler(errorHandler, execute_0);
  };
  Store.$metadata$ = {
    simpleName: 'Store',
    kind: 'interface',
    interfaces: [WithJob]
  };
  function QueuedUpdate(update, errorHandler) {
    this._update_1 = update;
    this._errorHandler = errorHandler;
  }
  QueuedUpdate.$metadata$ = {
    simpleName: 'QueuedUpdate',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_46(resultContinuation) {
    var i = new _no_name_provided__52(resultContinuation);
    var l = function (p1, p2, $cont) {
      return i.invoke_103(p1, p2, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _no_name_provided_$factory_47($boundThis) {
    var i = new _no_name_provided__57($boundThis);
    var l = function (p1, p2) {
      return i.invoke_117(p1, p2);
    };
    l.callableName = i._get_name__0();
    return l;
  }
  function _no_name_provided_$factory_48(this$0, $errorHandler, $execute) {
    var i = new _no_name_provided__58(this$0, $errorHandler, $execute);
    return function (p1, p2) {
      i.invoke_115(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_49($boundThis) {
    var i = new _no_name_provided__59($boundThis);
    var l = function (p1, p2) {
      return i.invoke_117(p1, p2);
    };
    l.callableName = i._get_name__0();
    return l;
  }
  function _no_name_provided_$factory_50(this$0, $errorHandler, $execute) {
    var i = new _no_name_provided__60(this$0, $errorHandler, $execute);
    return function (p1, p2) {
      i.invoke_119(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_51(this$0, $errorHandler, $execute, resultContinuation) {
    var i = new _no_name_provided__54(this$0, $errorHandler, $execute, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_107(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_52($execute, $it, resultContinuation) {
    var i = new _no_name_provided__53($execute, $it, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_109(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_53(this$0, $errorHandler, $execute, resultContinuation) {
    var i = new _no_name_provided__56(this$0, $errorHandler, $execute, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_111(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_54($execute, resultContinuation) {
    var i = new _no_name_provided__55($execute, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_109(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function WithComment() {
  }
  WithComment.$metadata$ = {
    simpleName: 'WithComment',
    kind: 'interface',
    interfaces: [TagContext]
  };
  function EventContext() {
  }
  EventContext.$metadata$ = {
    simpleName: 'EventContext',
    kind: 'interface',
    interfaces: [WithJob, WithEvents]
  };
  function _no_name_provided__61($this_callbackFlow) {
    this._$this_callbackFlow = $this_callbackFlow;
  }
  _no_name_provided__61.prototype.invoke_121 = function (it) {
    this._$this_callbackFlow.offer_8(it);
    Unit_getInstance();
  };
  _no_name_provided__61.prototype.invoke_166 = function (p1) {
    this.invoke_121(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__61.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__62(this$0, $type, $listener) {
    this._this$0_16 = this$0;
    this._$type = $type;
    this._$listener = $listener;
  }
  _no_name_provided__62.prototype.invoke_123 = function () {
    this._this$0_16.domNode.removeEventListener(this._$type._name_0, this._$listener);
  };
  _no_name_provided__62.prototype.invoke_124 = function () {
    this.invoke_123();
    return Unit_getInstance();
  };
  _no_name_provided__62.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function subscribe($this, type) {
    return new DomListener(callbackFlow(_no_name_provided_$factory_55($this, type, null)));
  }
  function _no_name_provided__63(this$0, $type, resultContinuation) {
    this._this$0_17 = this$0;
    this._$type_0 = $type;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__63.prototype.invoke_125 = function ($this$callbackFlow, $cont) {
    var tmp = this.create_10($this$callbackFlow, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__63.prototype.invoke_166 = function (p1, $cont) {
    this.invoke_125((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__63.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            var tmp_0 = this;
            tmp_0._listener0 = _no_name_provided_$factory_56(this._$this$callbackFlow);
            this._this$0_17.domNode.addEventListener(this._$type_0._name_0, this._listener0);
            this._state_0 = 1;
            suspendResult = awaitClose(this._$this$callbackFlow, _no_name_provided_$factory_57(this._this$0_17, this._$type_0, this._listener0), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__63.prototype.create_10 = function ($this$callbackFlow, completion) {
    var i = new _no_name_provided__63(this._this$0_17, this._$type_0, completion);
    i._$this$callbackFlow = $this$callbackFlow;
    return i;
  };
  _no_name_provided__63.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function WithEvents() {
  }
  WithEvents.prototype._get_changes__0 = function () {
    return subscribe(this, Events_getInstance()._change);
  };
  WithEvents.prototype._get_clicks__0 = function () {
    return subscribe(this, Events_getInstance()._click);
  };
  WithEvents.$metadata$ = {
    simpleName: 'WithEvents',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_55(this$0, $type, resultContinuation) {
    var i = new _no_name_provided__63(this$0, $type, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_125(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_56($this_callbackFlow) {
    var i = new _no_name_provided__61($this_callbackFlow);
    return function (p1) {
      i.invoke_121(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_57(this$0, $type, $listener) {
    var i = new _no_name_provided__62(this$0, $type, $listener);
    return function () {
      i.invoke_123();
      return Unit_getInstance();
    };
  }
  function Div(id, baseClass, job) {
    Tag_init_$Init$('div', id, baseClass, job, null, 16, null, this);
  }
  Div.$metadata$ = {
    simpleName: 'Div',
    kind: 'class',
    interfaces: [WithText]
  };
  function Label(id, baseClass, job) {
    Tag_init_$Init$('label', id, baseClass, job, null, 16, null, this);
  }
  Label.$metadata$ = {
    simpleName: 'Label',
    kind: 'class',
    interfaces: [WithText]
  };
  function Input(id, baseClass, job) {
    Tag_init_$Init$('input', id, baseClass, job, null, 16, null, this);
  }
  Input.prototype.placeholder_0 = function (value) {
    return this.attr_0('placeholder', value);
  };
  Input.$metadata$ = {
    simpleName: 'Input',
    kind: 'class',
    interfaces: []
  };
  function Hr(id, baseClass, job) {
    Tag_init_$Init$('hr', id, baseClass, job, null, 16, null, this);
  }
  Hr.$metadata$ = {
    simpleName: 'Hr',
    kind: 'class',
    interfaces: []
  };
  function Button(id, baseClass, job) {
    Tag_init_$Init$('button', id, baseClass, job, null, 16, null, this);
  }
  Button.$metadata$ = {
    simpleName: 'Button',
    kind: 'class',
    interfaces: [WithText]
  };
  function H(num, id, baseClass, job) {
    var tmp = '' + 'h' + num;
    Tag_init_$Init$(tmp, id, baseClass, job, null, 16, null, this);
  }
  H.$metadata$ = {
    simpleName: 'H',
    kind: 'class',
    interfaces: [WithText]
  };
  function Pre(id, baseClass, job) {
    Tag_init_$Init$('pre', id, baseClass, job, null, 16, null, this);
  }
  Pre.$metadata$ = {
    simpleName: 'Pre',
    kind: 'class',
    interfaces: [WithText]
  };
  function TextElement(tagName, id, baseClass, job) {
    Tag_init_$Init$(tagName, id, baseClass, job, null, 16, null, this);
  }
  TextElement.$metadata$ = {
    simpleName: 'TextElement',
    kind: 'class',
    interfaces: [WithText]
  };
  function TagContext() {
  }
  TagContext.prototype.button_9 = function (baseClass, id, content) {
    return this.register_10(new Button(id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.button$default_8 = function (baseClass, id, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      baseClass = null;
    if (!(($mask0 & 2) === 0))
      id = null;
    return $handler == null ? this.button_9(baseClass, id, content) : $handler(baseClass, id, content);
  };
  TagContext.prototype.div_9 = function (baseClass, id, content) {
    return this.register_10(new Div(id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.div$default_8 = function (baseClass, id, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      baseClass = null;
    if (!(($mask0 & 2) === 0))
      id = null;
    return $handler == null ? this.div_9(baseClass, id, content) : $handler(baseClass, id, content);
  };
  TagContext.prototype.hr_8 = function (baseClass, id, content) {
    return this.register_10(new Hr(id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.hr$default_8 = function (baseClass, id, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      baseClass = null;
    if (!(($mask0 & 2) === 0))
      id = null;
    return $handler == null ? this.hr_8(baseClass, id, content) : $handler(baseClass, id, content);
  };
  TagContext.prototype.h6_8 = function (baseClass, id, content) {
    return this.register_10(new H(6, id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.h6$default_8 = function (baseClass, id, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      baseClass = null;
    if (!(($mask0 & 2) === 0))
      id = null;
    return $handler == null ? this.h6_8(baseClass, id, content) : $handler(baseClass, id, content);
  };
  TagContext.prototype.input_0 = function (baseClass, id, content) {
    return this.register_10(new Input(id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.label_9 = function (baseClass, id, content) {
    return this.register_10(new Label(id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.label$default_8 = function (baseClass, id, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      baseClass = null;
    if (!(($mask0 & 2) === 0))
      id = null;
    return $handler == null ? this.label_9(baseClass, id, content) : $handler(baseClass, id, content);
  };
  TagContext.prototype.pre_8 = function (baseClass, id, content) {
    return this.register_10(new Pre(id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.pre$default_8 = function (baseClass, id, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      baseClass = null;
    if (!(($mask0 & 2) === 0))
      id = null;
    return $handler == null ? this.pre_8(baseClass, id, content) : $handler(baseClass, id, content);
  };
  TagContext.prototype.code_9 = function (baseClass, id, content) {
    return this.register_10(new TextElement('code', id, baseClass, this._get_job__15()), content);
  };
  TagContext.prototype.code$default_8 = function (baseClass, id, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      baseClass = null;
    if (!(($mask0 & 2) === 0))
      id = null;
    return $handler == null ? this.code_9(baseClass, id, content) : $handler(baseClass, id, content);
  };
  TagContext.$metadata$ = {
    simpleName: 'TagContext',
    kind: 'interface',
    interfaces: [WithJob]
  };
  function EventType(name) {
    this._name_0 = name;
  }
  EventType.$metadata$ = {
    simpleName: 'EventType',
    kind: 'class',
    interfaces: []
  };
  function Events() {
    Events_instance = this;
    this._abort = new EventType('abort');
    this._afterprint = new EventType('afterprint');
    this._beforeprint = new EventType('beforeprint');
    this._beforeunload = new EventType('beforeunload');
    this._blur = new EventType('blur');
    this._canplay = new EventType('canplay');
    this._canplaythrough = new EventType('canplaythrough');
    this._change = new EventType('change');
    this._click = new EventType('click');
    this._contextmenu = new EventType('contextmenu');
    this._copy = new EventType('copy');
    this._cut = new EventType('cut');
    this._dblclick = new EventType('dblclick');
    this._drag = new EventType('drag');
    this._dragend = new EventType('dragend');
    this._dragenter = new EventType('dragenter');
    this._dragleave = new EventType('dragleave');
    this._dragover = new EventType('dragover');
    this._dragstart = new EventType('dragstart');
    this._drop = new EventType('drop');
    this._durationchange = new EventType('durationchange');
    this._ended = new EventType('ended');
    this._focus = new EventType('focus');
    this._focusin = new EventType('focusin');
    this._focusout = new EventType('focusout');
    this._fullscreenchange = new EventType('fullscreenchange');
    this._fullscreenerror = new EventType('fullscreenerror');
    this._hashchange = new EventType('hashchange');
    this._input_0 = new EventType('input');
    this._invalid = new EventType('invalid');
    this._keydown = new EventType('keydown');
    this._keypress = new EventType('keypress');
    this._keyup = new EventType('keyup');
    this._load = new EventType('load');
    this._loadeddata = new EventType('loadeddata');
    this._loadedmetadata = new EventType('loadedmetadata');
    this._loadstart = new EventType('loadstart');
    this._message = new EventType('message');
    this._mousedown = new EventType('mousedown');
    this._mouseenter = new EventType('mouseenter');
    this._mouseleave = new EventType('mouseleave');
    this._mousemove = new EventType('mousemove');
    this._mouseover = new EventType('mouseover');
    this._mouseout = new EventType('mouseout');
    this._mouseup = new EventType('mouseup');
    this._offline = new EventType('offline');
    this._online = new EventType('online');
    this._open = new EventType('open');
    this._pagehide = new EventType('pagehide');
    this._pageshow = new EventType('pageshow');
    this._paste = new EventType('paste');
    this._pause = new EventType('pause');
    this._play = new EventType('play');
    this._playing = new EventType('playing');
    this._popstate = new EventType('popstate');
    this._progress = new EventType('progress');
    this._ratechange = new EventType('ratechange');
    this._resize = new EventType('resize');
    this._reset = new EventType('reset');
    this._scroll = new EventType('scroll');
    this._search = new EventType('search');
    this._seeked = new EventType('seeked');
    this._seeking = new EventType('seeking');
    this._select = new EventType('select');
    this._show = new EventType('show');
    this._stalled = new EventType('stalled');
    this._storage = new EventType('storage');
    this._submit = new EventType('submit');
    this._suspend = new EventType('suspend');
    this._timeupdate = new EventType('timeupdate');
    this._toggle = new EventType('toggle');
    this._touchcancel = new EventType('touchcancel');
    this._touchend = new EventType('touchend');
    this._touchmove = new EventType('touchmove');
    this._touchstart = new EventType('touchstart');
    this._unload = new EventType('unload');
    this._volumechange = new EventType('volumechange');
    this._waiting = new EventType('waiting');
    this._wheel = new EventType('wheel');
  }
  Events.$metadata$ = {
    simpleName: 'Events',
    kind: 'object',
    interfaces: []
  };
  var Events_instance;
  function Events_getInstance() {
    if (Events_instance == null)
      new Events();
    return Events_instance;
  }
  function render(selector, override, content) {
    var tmp0_safe_receiver = document.querySelector(selector);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0;
      if (tmp0_safe_receiver instanceof HTMLElement) {
        render_0(tmp0_safe_receiver, override, content);
        tmp_0 = Unit_getInstance();
      } else {
        {
          tmp_0 = new MountTargetNotFoundException('' + 'element with id=' + selector + ' is not an HTMLElement');
        }
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    if (tmp1_elvis_lhs == null)
      throw new MountTargetNotFoundException('' + 'html document contains no element with id=' + selector);
    else
      tmp1_elvis_lhs;
    Unit_getInstance();
  }
  function render$default(selector, override, content, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      override = true;
    return render(selector, override, content);
  }
  function render_0(targetElement, override, content) {
    var tmp0_safe_receiver = targetElement;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      if (override)
        tmp0_safe_receiver.innerHTML = '';
      var tmp_0 = tmp0_safe_receiver.tagName;
      var tmp_1 = tmp0_safe_receiver.id;
      content(Tag_init_$Create$(tmp_0, tmp_1, null, Job$default(null, 1, null), tmp0_safe_receiver, 4, null));
      tmp = Unit_getInstance();
    }
    var tmp1_elvis_lhs = tmp;
    if (tmp1_elvis_lhs == null)
      throw new MountTargetNotFoundException('targetElement should not be null');
    else {
      Unit_getInstance();
    }
  }
  function MountTargetNotFoundException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, MountTargetNotFoundException);
  }
  MountTargetNotFoundException.$metadata$ = {
    simpleName: 'MountTargetNotFoundException',
    kind: 'class',
    interfaces: []
  };
  function values(_this_) {
    var tmp0_map_0 = _this_._get_events__0();
    return new _no_name_provided__1_1_1_0(tmp0_map_0);
  }
  function DomListener(events) {
    Listener.call(this, events);
  }
  DomListener.$metadata$ = {
    simpleName: 'DomListener',
    kind: 'class',
    interfaces: []
  };
  function Listener(events) {
    this._events = events;
  }
  Listener.prototype._get_events__0 = function () {
    return this._events;
  };
  Listener.$metadata$ = {
    simpleName: 'Listener',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_7_3_3_0($collector) {
    this._$collector_4 = $collector;
  }
  _no_name_provided__1_7_3_3_0.prototype.emit_2_8_4_4_0 = function (value, $cont) {
    var tmp0_unsafeCast_0_12 = value.target;
    return this._$collector_4.emit_9(tmp0_unsafeCast_0_12.value, $cont);
  };
  _no_name_provided__1_7_3_3_0.prototype.emit_9 = function (value, $cont) {
    return this.emit_2_8_4_4_0(value instanceof Event ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__1_7_3_3_0.$metadata$ = {
    simpleName: '<no name provided>_1_7_3_3',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $collect_2_2_2COROUTINE$16(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__15 = _this_;
    this._collector_7 = collector;
  }
  $collect_2_2_2COROUTINE$16.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this.__this__15._$tmp0_map_0_0.collect_12(new _no_name_provided__1_7_3_3_0(this._collector_7), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collect_2_2_2COROUTINE$16.$metadata$ = {
    simpleName: '$collect_2_2_2COROUTINE$16',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_1_1_0($tmp0_map_0) {
    this._$tmp0_map_0_0 = $tmp0_map_0;
  }
  _no_name_provided__1_1_1_0.prototype.collect_2_2_2_0 = function (collector, $cont) {
    var tmp = new $collect_2_2_2COROUTINE$16(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_1_1_0.prototype.collect_12 = function (collector, $cont) {
    return this.collect_2_2_2_0(collector, $cont);
  };
  _no_name_provided__1_1_1_0.$metadata$ = {
    simpleName: '<no name provided>_1_1_1',
    kind: 'class',
    interfaces: [Flow]
  };
  function mountDomNode(job, target, upstream) {
    var placeholder = {_v: document.createComment('')};
    target.appendChild(ensureNotNull(placeholder._v));
    Unit_getInstance();
    mountSingle(job, upstream, _no_name_provided_$factory_58(target, placeholder, null));
  }
  function _no_name_provided__64($target, $placeholder, resultContinuation) {
    this._$target = $target;
    this._$placeholder = $placeholder;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__64.prototype.invoke_127 = function (value, last, $cont) {
    var tmp = this.create_11(value, last, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__64.prototype.invoke_134 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isObject(p1) : false) ? p1 : THROW_CCE();
    this.invoke_127(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $cont);
    return Unit_getInstance();
  };
  _no_name_provided__64.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          var tmp0_safe_receiver = this._last_3;
          if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.domNode) == null)) {
            this._$target.replaceChild(this._value_9.domNode, this._last_3.domNode);
            Unit_getInstance();
          } else {
            {
              this._$target.replaceChild(this._value_9.domNode, ensureNotNull(this._$placeholder._v));
              Unit_getInstance();
              this._$placeholder._v = null;
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__64.prototype.create_11 = function (value, last, completion) {
    var i = new _no_name_provided__64(this._$target, this._$placeholder, completion);
    i._value_9 = value;
    i._last_3 = last;
    return i;
  };
  _no_name_provided__64.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 2
  };
  function _no_name_provided_$factory_58($target, $placeholder, resultContinuation) {
    var i = new _no_name_provided__64($target, $placeholder, resultContinuation);
    var l = function (p1, p2, $cont) {
      return i.invoke_127(p1, p2, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Tag_init_$Init$(tagName, id, baseClass, job, domNode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      id = null;
    if (!(($mask0 & 4) === 0))
      baseClass = null;
    if (!(($mask0 & 16) === 0)) {
      var tmp0_also_0 = window.document.createElement(tagName);
      if (!(id == null))
        tmp0_also_0.id = id;
      if (!(baseClass == null ? true : isBlank(baseClass)))
        tmp0_also_0.className = baseClass;
      else {
      }
      var tmp1_unsafeCast_0 = tmp0_also_0;
      domNode = tmp1_unsafeCast_0;
    }Tag.call($this, tagName, id, baseClass, job, domNode);
    return $this;
  }
  function Tag_init_$Create$(tagName, id, baseClass, job, domNode, $mask0, $marker) {
    return Tag_init_$Init$(tagName, id, baseClass, job, domNode, $mask0, $marker, Object.create(Tag.prototype));
  }
  function Companion_10() {
    Companion_instance_9 = this;
  }
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_10();
    return Companion_instance_9;
  }
  function Tag(tagName, id, baseClass, job, domNode) {
    Companion_getInstance_9();
    this._id_0 = id;
    this._baseClass = baseClass;
    this._job_2 = job;
    this._domNode = domNode;
  }
  Tag.prototype._get_job__15 = function () {
    return this._job_2;
  };
  Tag.prototype._get_domNode__10 = function () {
    return this._domNode;
  };
  Tag.prototype.register_9 = function (element, content) {
    content(element);
    this._get_domNode__10().appendChild(element.domNode);
    Unit_getInstance();
    return element;
  };
  Tag.prototype.register_10 = function (element, content) {
    return this.register_9(isObject(element) ? element : THROW_CCE(), content);
  };
  Tag.prototype.attr_0 = function (name, value) {
    this._get_domNode__10().setAttribute(name, value);
  };
  Tag.$metadata$ = {
    simpleName: 'Tag',
    kind: 'class',
    interfaces: [WithComment, EventContext, TagContext]
  };
  Object.defineProperty(Tag.prototype, 'domNode', {
    configurable: true,
    get: Tag.prototype._get_domNode__10
  });
  function _no_name_provided__1_7_3_3_1($collector) {
    this._$collector_5 = $collector;
  }
  _no_name_provided__1_7_3_3_1.prototype.emit_2_8_4_4_1 = function (value, $cont) {
    return this._$collector_5.emit_9(TextNode_init_$Create$(value, null, 2, null), $cont);
  };
  _no_name_provided__1_7_3_3_1.prototype.emit_9 = function (value, $cont) {
    return this.emit_2_8_4_4_1((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), $cont);
  };
  _no_name_provided__1_7_3_3_1.$metadata$ = {
    simpleName: '<no name provided>_1_7_3_3',
    kind: 'class',
    interfaces: [FlowCollector]
  };
  function $collect_2_2_2COROUTINE$31(_this_, collector, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__16 = _this_;
    this._collector_8 = collector;
  }
  $collect_2_2_2COROUTINE$31.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = this.__this__16._$this_asText.collect_12(new _no_name_provided__1_7_3_3_1(this._collector_8), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $collect_2_2_2COROUTINE$31.$metadata$ = {
    simpleName: '$collect_2_2_2COROUTINE$31',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1_1_1_1($this_asText) {
    this._$this_asText = $this_asText;
  }
  _no_name_provided__1_1_1_1.prototype.collect_2_2_2_1 = function (collector, $cont) {
    var tmp = new $collect_2_2_2COROUTINE$31(this, collector, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__1_1_1_1.prototype.collect_12 = function (collector, $cont) {
    return this.collect_2_2_2_1(collector, $cont);
  };
  _no_name_provided__1_1_1_1.$metadata$ = {
    simpleName: '<no name provided>_1_1_1',
    kind: 'class',
    interfaces: [Flow]
  };
  function WithText() {
  }
  WithText.prototype.asText_0 = function (_this__0) {
    var tmp = this._get_job__15();
    var tmp_0 = this.domNode;
    mountDomNode(tmp, tmp_0, new _no_name_provided__1_1_1_1(_this__0));
  };
  WithText.prototype.unaryPlus_2 = function (_this__0) {
    return this.domNode.appendChild(document.createTextNode(_this__0));
  };
  WithText.$metadata$ = {
    simpleName: 'WithText',
    kind: 'interface',
    interfaces: [TagContext]
  };
  function TextNode_init_$Init$(content, domNode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      domNode = window.document.createTextNode(content);
    TextNode.call($this, content, domNode);
    return $this;
  }
  function TextNode_init_$Create$(content, domNode, $mask0, $marker) {
    return TextNode_init_$Init$(content, domNode, $mask0, $marker, Object.create(TextNode.prototype));
  }
  function TextNode(content, domNode) {
    this._content = content;
    this._domNode_0 = domNode;
  }
  TextNode.prototype._get_domNode__10 = function () {
    return this._domNode_0;
  };
  TextNode.$metadata$ = {
    simpleName: 'TextNode',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(TextNode.prototype, 'domNode', {
    configurable: true,
    get: TextNode.prototype._get_domNode__10
  });
  function Request_init_$Init$(baseUrl, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, reqWindow, authentication, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      baseUrl = '';
    if (!(($mask0 & 2) === 0))
      headers = emptyMap();
    if (!(($mask0 & 4) === 0))
      body = undefined;
    if (!(($mask0 & 8) === 0))
      referrer = undefined;
    if (!(($mask0 & 16) === 0))
      referrerPolicy = undefined;
    if (!(($mask0 & 32) === 0))
      mode = undefined;
    if (!(($mask0 & 64) === 0))
      credentials = undefined;
    if (!(($mask0 & 128) === 0))
      cache = undefined;
    if (!(($mask0 & 256) === 0))
      redirect = undefined;
    if (!(($mask0 & 512) === 0))
      integrity = undefined;
    if (!(($mask0 & 1024) === 0))
      keepalive = undefined;
    if (!(($mask0 & 2048) === 0))
      reqWindow = undefined;
    if (!(($mask0 & 4096) === 0))
      authentication = null;
    Request_0.call($this, baseUrl, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, reqWindow, authentication);
    return $this;
  }
  function Request_init_$Create$(baseUrl, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, reqWindow, authentication, $mask0, $marker) {
    return Request_init_$Init$(baseUrl, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, reqWindow, authentication, $mask0, $marker, Object.create(Request_0.prototype));
  }
  function execute($this, subUrl, init, $cont) {
    var tmp = new $executeCOROUTINE$33($this, subUrl, init, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  }
  function buildInit($this, method, $cont) {
    var tmp = new $buildInitCOROUTINE$34($this, method, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  }
  function $executeCOROUTINE$33(_this_, subUrl, init, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__17 = _this_;
    this._subUrl = subUrl;
    this._init = init;
  }
  $executeCOROUTINE$33.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 9;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1._tmp0_apply_0_10 = StringBuilder_init_$Create$_0();
            this._tmp0_apply_0_10.append_5(trimEnd(this.__this__17._baseUrl, charArrayOf([new Char(47)])));
            Unit_getInstance();
            if (charSequenceLength(this._subUrl) > 0) {
              this._tmp0_apply_0_10.append_5('' + '/' + trimStart(this._subUrl, charArrayOf([new Char(47)])));
              Unit_getInstance();
            } else {
            }

            tmp_0._url1 = this._tmp0_apply_0_10.toString();
            this._state_0 = 1;
            suspendResult = await_0(window.fetch(this._url1, this._init), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._response2 = suspendResult;
            if (!(this.__this__17._authentication == null)) {
              if (this.__this__17._authentication._get_errorcodesEnforcingAuthentication___error().contains_16(this._response2.status)) {
                this._state_0 = 2;
                suspendResult = this.__this__17._authentication.authenticate__error(this);
                if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                  return suspendResult;
                }continue $sm;
              } else {
                this._state_0 = 6;
                continue $sm;
              }
            } else {
              this._state_0 = 7;
              continue $sm;
            }

            break;
          case 2:
            suspendResult;
            this._state_0 = 3;
            suspendResult = this.__this__17._authentication.enrichRequest__error(this.__this__17, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 3:
            this._ARGUMENT3 = suspendResult;
            this._state_0 = 4;
            suspendResult = buildInit(this._ARGUMENT3, ensureNotNull(this._init.method), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 4:
            this._redo4 = suspendResult;
            this._state_0 = 5;
            suspendResult = await_0(window.fetch(this._url1, this._redo4), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 5:
            this._response2 = suspendResult;
            this._state_0 = 6;
            continue $sm;
          case 6:
            this._state_0 = 7;
            continue $sm;
          case 7:
            if (this._response2.ok) {
              return this._response2;
            } else {
              this._ARGUMENT5_0 = this._response2.status;
              this._state_0 = 8;
              suspendResult = getBody(this._response2, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                return suspendResult;
              }continue $sm;
            }

            break;
          case 8:
            var ARGUMENT = suspendResult;
            throw new FetchException(this._ARGUMENT5_0, ARGUMENT, this._response2);
          case 9:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 9) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$33.$metadata$ = {
    simpleName: '$executeCOROUTINE$33',
    kind: 'class',
    interfaces: []
  };
  function $buildInitCOROUTINE$34(_this_, method, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__18 = _this_;
    this._method = method;
  }
  $buildInitCOROUTINE$34.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._tmp0_safe_receiver0 = this.__this__18._authentication;
            if (this._tmp0_safe_receiver0 == null) {
              this._WHEN_RESULT1 = null;
              this._state_0 = 2;
              continue $sm;
            } else {
              this._state_0 = 1;
              suspendResult = this._tmp0_safe_receiver0.enrichRequest__error(this.__this__18, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                return suspendResult;
              }continue $sm;
            }

            break;
          case 1:
            this._WHEN_RESULT1 = suspendResult;
            this._state_0 = 2;
            continue $sm;
          case 2:
            var tmp1_elvis_lhs = this._WHEN_RESULT1;
            var request = tmp1_elvis_lhs == null ? this.__this__18 : tmp1_elvis_lhs;
            var reqHeader = new Headers();
            var tmp0_iterator_0 = request._headers;
            var tmp2_iterator = tmp0_iterator_0._get_entries__4().iterator_32();
            while (tmp2_iterator.hasNext_10()) {
              var tmp3_loop_parameter = tmp2_iterator.next_10();
              var k = tmp3_loop_parameter._get_key__24();
              var v = tmp3_loop_parameter._get_value__7();
              reqHeader.set(k, v);
            }

            var tmp4_body = request._body;
            var tmp5_referrer = request._referrer;
            var tmp6_referrerPolicy = request._referrerPolicy;
            var tmp7_mode = request._mode;
            var tmp8_credentials = request._credentials;
            var tmp9_cache = request._cache;
            var tmp10_redirect = request._redirect;
            var tmp11_integrity = request._integrity;
            var tmp12_keepalive = request._keepalive;
            var tmp13_window = request._reqWindow;
            var o_1 = {};
            o_1['method'] = this._method;
            o_1['headers'] = reqHeader;
            o_1['body'] = tmp4_body;
            o_1['referrer'] = tmp5_referrer;
            o_1['referrerPolicy'] = tmp6_referrerPolicy;
            o_1['mode'] = tmp7_mode;
            o_1['credentials'] = tmp8_credentials;
            o_1['cache'] = tmp9_cache;
            o_1['redirect'] = tmp10_redirect;
            o_1['integrity'] = tmp11_integrity;
            o_1['keepalive'] = tmp12_keepalive;
            o_1['window'] = tmp13_window;
            return o_1;
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $buildInitCOROUTINE$34.$metadata$ = {
    simpleName: '$buildInitCOROUTINE$34',
    kind: 'class',
    interfaces: []
  };
  function $getCOROUTINE$35(_this_, subUrl, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__19 = _this_;
    this._subUrl_0 = subUrl;
  }
  $getCOROUTINE$35.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            suspendResult = buildInit(this.__this__19, 'GET', this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._ARGUMENT0_0 = suspendResult;
            this._state_0 = 2;
            suspendResult = execute(this.__this__19, this._subUrl_0, this._ARGUMENT0_0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $getCOROUTINE$35.$metadata$ = {
    simpleName: '$getCOROUTINE$35',
    kind: 'class',
    interfaces: []
  };
  function $postCOROUTINE$40(_this_, subUrl, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__20 = _this_;
    this._subUrl_1 = subUrl;
  }
  $postCOROUTINE$40.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            suspendResult = buildInit(this.__this__20, 'POST', this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._ARGUMENT0_1 = suspendResult;
            this._state_0 = 2;
            suspendResult = execute(this.__this__20, this._subUrl_1, this._ARGUMENT0_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $postCOROUTINE$40.$metadata$ = {
    simpleName: '$postCOROUTINE$40',
    kind: 'class',
    interfaces: []
  };
  function Request_0(baseUrl, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, reqWindow, authentication) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._body = body;
    this._referrer = referrer;
    this._referrerPolicy = referrerPolicy;
    this._mode = mode;
    this._credentials = credentials;
    this._cache = cache;
    this._redirect = redirect;
    this._integrity = integrity;
    this._keepalive = keepalive;
    this._reqWindow = reqWindow;
    this._authentication = authentication;
  }
  Request_0.prototype.get_41 = function (subUrl, $cont) {
    var tmp = new $getCOROUTINE$35(this, subUrl, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  Request_0.prototype.get$default = function (subUrl, $mask0, $handler, $cont) {
    if (!(($mask0 & 1) === 0))
      subUrl = '';
    return this.get_41(subUrl, $cont);
  };
  Request_0.prototype.post = function (subUrl, $cont) {
    var tmp = new $postCOROUTINE$40(this, subUrl, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  Request_0.prototype.post$default = function (subUrl, $mask0, $handler, $cont) {
    if (!(($mask0 & 1) === 0))
      subUrl = '';
    return this.post(subUrl, $cont);
  };
  Request_0.prototype.body_0 = function (content) {
    return new Request_0(this._baseUrl, this._headers, content, this._referrer, this._referrerPolicy, this._mode, this._credentials, this._cache, this._redirect, this._integrity, this._keepalive, this._reqWindow, this._authentication);
  };
  Request_0.prototype.header = function (name, value) {
    return new Request_0(this._baseUrl, plus(this._headers, to(name, value)), this._body, this._referrer, this._referrerPolicy, this._mode, this._credentials, this._cache, this._redirect, this._integrity, this._keepalive, this._reqWindow, this._authentication);
  };
  Request_0.prototype.contentType_0 = function (value) {
    return this.header('Content-Type', value);
  };
  Request_0.prototype.accept_0 = function (value) {
    return this.header('Accept', value);
  };
  Request_0.prototype.acceptJson = function () {
    return this.accept_0('application/json');
  };
  Request_0.$metadata$ = {
    simpleName: 'Request',
    kind: 'class',
    interfaces: []
  };
  function http(baseUrl) {
    return Request_init_$Create$(baseUrl, null, null, null, null, null, null, null, null, null, null, null, null, 8190, null);
  }
  function getBody(_this_, $cont) {
    return await_0(_this_.text(), $cont);
  }
  function FetchException(statusCode, body, response) {
    Exception_init_$Init$_0('' + 'code=' + statusCode + ', url=' + response.url + ', body=' + body, this);
    this._statusCode = statusCode;
    this._body_0 = body;
    this._response = response;
    captureStack(this, FetchException);
  }
  FetchException.$metadata$ = {
    simpleName: 'FetchException',
    kind: 'class',
    interfaces: []
  };
  function main() {
    var userStore = new _no_name_provided__68();
    render$default('#target', false, _no_name_provided_$factory_59(userStore), 2, null);
  }
  function _no_name_provided__65(this$0, resultContinuation) {
    this._this$0_18 = this$0;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__65.prototype.invoke_129 = function (it, $cont) {
    var tmp = this.create_12(it, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__65.prototype.invoke_166 = function (p1, $cont) {
    return this.invoke_129((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__65.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            suspendResult = this._this$0_18._users.get$default(null, 1, null, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._ARGUMENT0_2 = suspendResult;
            this._state_0 = 2;
            suspendResult = getBody(this._ARGUMENT0_2, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__65.prototype.create_12 = function (it, completion) {
    var i = new _no_name_provided__65(this._this$0_18, completion);
    i._it_3 = it;
    return i;
  };
  _no_name_provided__65.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  function _no_name_provided__66(this$0, resultContinuation) {
    this._this$0_19 = this$0;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__66.prototype.invoke_133 = function (_anonymous_parameter_0_, s, $cont) {
    var tmp = this.create_14(_anonymous_parameter_0_, s, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__66.prototype.invoke_134 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_133(tmp, (!(p2 == null) ? typeof p2 === 'string' : false) ? p2 : THROW_CCE(), $cont);
  };
  _no_name_provided__66.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            suspendResult = this._this$0_19._users.acceptJson().get_41(this._s, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._ARGUMENT0_3 = suspendResult;
            this._state_0 = 2;
            suspendResult = getBody(this._ARGUMENT0_3, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__66.prototype.create_14 = function (_anonymous_parameter_0_, s, completion) {
    var i = new _no_name_provided__66(this._this$0_19, completion);
    i.__anonymous_parameter_0__0 = _anonymous_parameter_0_;
    i._s = s;
    return i;
  };
  _no_name_provided__66.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 2
  };
  function _no_name_provided__67(this$0, resultContinuation) {
    this._this$0_20 = this$0;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__67.prototype.invoke_133 = function (_anonymous_parameter_0_, s, $cont) {
    var tmp = this.create_14(_anonymous_parameter_0_, s, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_37();
  };
  _no_name_provided__67.prototype.invoke_134 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_133(tmp, (!(p2 == null) ? typeof p2 === 'string' : false) ? p2 : THROW_CCE(), $cont);
  };
  _no_name_provided__67.prototype.doResume_37 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._state_0 = 1;
            var tmp_0 = this._this$0_20._users.body_0(trimIndent('' + '\n                    {\n                        "name": "' + this._s_0 + '",\n                        "job": "programmer"\n                    }\n                ')).contentType_0('application/json; charset=utf-8').acceptJson();
            suspendResult = tmp_0.post$default(null, 1, null, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._ARGUMENT0_4 = suspendResult;
            this._state_0 = 2;
            suspendResult = getBody(this._ARGUMENT0_4, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__67.prototype.create_14 = function (_anonymous_parameter_0_, s, completion) {
    var i = new _no_name_provided__67(this._this$0_20, completion);
    i.__anonymous_parameter_0__1 = _anonymous_parameter_0_;
    i._s_0 = s;
    return i;
  };
  _no_name_provided__67.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 2
  };
  function _no_name_provided__68() {
    RootStore_init_$Init$('', null, 2, null, this);
    this._users = http('https://reqres.in/api/users');
    var tmp = this;
    tmp._loadAllUsers = this.handle$default_2(null, _no_name_provided_$factory_60(this, null), 1, null);
    var tmp_0 = this;
    tmp_0._loadUserById = this.handle$default_1(null, _no_name_provided_$factory_61(this, null), 1, null);
    var tmp_1 = this;
    tmp_1._saveUserWithName = this.handle$default_1(null, _no_name_provided_$factory_62(this, null), 1, null);
  }
  _no_name_provided__68.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__69() {
  }
  _no_name_provided__69.prototype.invoke_139 = function ($this$label) {
    $this$label.unaryPlus_2('Load user by id');
    Unit_getInstance();
  };
  _no_name_provided__69.prototype.invoke_166 = function (p1) {
    this.invoke_139(p1 instanceof Label ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__69.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__70($userStore) {
    this._$userStore = $userStore;
  }
  _no_name_provided__70.prototype.invoke_141 = function ($this$input) {
    $this$input.placeholder_0('Enter user id');
    $this$input.handledBy_1(values($this$input._get_changes__0()), this._$userStore._loadUserById);
  };
  _no_name_provided__70.prototype.invoke_166 = function (p1) {
    this.invoke_141(p1 instanceof Input ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__70.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__71() {
  }
  _no_name_provided__71.prototype.invoke_139 = function ($this$label) {
    $this$label.unaryPlus_2('Save user');
    Unit_getInstance();
  };
  _no_name_provided__71.prototype.invoke_166 = function (p1) {
    this.invoke_139(p1 instanceof Label ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__71.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__72($userStore) {
    this._$userStore_0 = $userStore;
  }
  _no_name_provided__72.prototype.invoke_141 = function ($this$input) {
    $this$input.placeholder_0('Enter new user name');
    $this$input.handledBy_1(values($this$input._get_changes__0()), this._$userStore_0._saveUserWithName);
  };
  _no_name_provided__72.prototype.invoke_166 = function (p1) {
    this.invoke_141(p1 instanceof Input ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__72.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__73($userStore) {
    this._$userStore_1 = $userStore;
  }
  _no_name_provided__73.prototype.invoke_143 = function ($this$button) {
    $this$button.unaryPlus_2('Load all users');
    Unit_getInstance();
    $this$button.handledBy_2($this$button._get_clicks__0(), this._$userStore_1._loadAllUsers);
  };
  _no_name_provided__73.prototype.invoke_166 = function (p1) {
    this.invoke_143(p1 instanceof Button ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__73.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__74($userStore) {
    this._$userStore_2 = $userStore;
  }
  _no_name_provided__74.prototype.invoke_145 = function ($this$code) {
    $this$code.asText_0(this._$userStore_2._get_data__0());
  };
  _no_name_provided__74.prototype.invoke_166 = function (p1) {
    this.invoke_145(p1 instanceof TextElement ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__74.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__75() {
  }
  _no_name_provided__75.prototype.invoke_147 = function ($this$h6) {
    $this$h6.unaryPlus_2('User store data');
    Unit_getInstance();
  };
  _no_name_provided__75.prototype.invoke_166 = function (p1) {
    this.invoke_147(p1 instanceof H ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__75.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__76($userStore) {
    this._$userStore_3 = $userStore;
  }
  _no_name_provided__76.prototype.invoke_149 = function ($this$pre) {
    $this$pre.code$default_8(null, null, _no_name_provided_$factory_77(this._$userStore_3), 3, null);
    Unit_getInstance();
  };
  _no_name_provided__76.prototype.invoke_166 = function (p1) {
    this.invoke_149(p1 instanceof Pre ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__76.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__77($userStore) {
    this._$userStore_4 = $userStore;
  }
  _no_name_provided__77.prototype.invoke_163 = function ($this$div) {
    $this$div.label$default_8('load-user', null, _no_name_provided_$factory_70(), 2, null);
    Unit_getInstance();
    $this$div.input_0('form-control', 'load-user', _no_name_provided_$factory_71(this._$userStore_4));
    Unit_getInstance();
  };
  _no_name_provided__77.prototype.invoke_166 = function (p1) {
    this.invoke_163(p1 instanceof Div ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__77.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__78() {
  }
  _no_name_provided__78.prototype.invoke_157 = function ($this$hr) {
    return Unit_getInstance();
  };
  _no_name_provided__78.prototype.invoke_166 = function (p1) {
    this.invoke_157(p1 instanceof Hr ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__78.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__79($userStore) {
    this._$userStore_5 = $userStore;
  }
  _no_name_provided__79.prototype.invoke_163 = function ($this$div) {
    $this$div.label$default_8('save-user', null, _no_name_provided_$factory_72(), 2, null);
    Unit_getInstance();
    $this$div.input_0('form-control', 'save-user', _no_name_provided_$factory_73(this._$userStore_5));
    Unit_getInstance();
  };
  _no_name_provided__79.prototype.invoke_166 = function (p1) {
    this.invoke_163(p1 instanceof Div ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__79.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__80() {
  }
  _no_name_provided__80.prototype.invoke_157 = function ($this$hr) {
    return Unit_getInstance();
  };
  _no_name_provided__80.prototype.invoke_166 = function (p1) {
    this.invoke_157(p1 instanceof Hr ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__80.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__81($userStore) {
    this._$userStore_6 = $userStore;
  }
  _no_name_provided__81.prototype.invoke_163 = function ($this$div) {
    $this$div.button$default_8('btn btn-primary', null, _no_name_provided_$factory_74(this._$userStore_6), 2, null);
    Unit_getInstance();
  };
  _no_name_provided__81.prototype.invoke_166 = function (p1) {
    this.invoke_163(p1 instanceof Div ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__81.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__82($userStore) {
    this._$userStore_7 = $userStore;
  }
  _no_name_provided__82.prototype.invoke_163 = function ($this$div) {
    $this$div.h6$default_8('card-title', null, _no_name_provided_$factory_75(), 2, null);
    Unit_getInstance();
    $this$div.pre$default_8('text-wrap', null, _no_name_provided_$factory_76(this._$userStore_7), 2, null);
    Unit_getInstance();
  };
  _no_name_provided__82.prototype.invoke_166 = function (p1) {
    this.invoke_163(p1 instanceof Div ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__82.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__83($userStore) {
    this._$userStore_8 = $userStore;
  }
  _no_name_provided__83.prototype.invoke_163 = function ($this$div) {
    $this$div.div$default_8('form-group', null, _no_name_provided_$factory_64(this._$userStore_8), 2, null);
    Unit_getInstance();
    $this$div.hr$default_8('my-4', null, _no_name_provided_$factory_65(), 2, null);
    Unit_getInstance();
    $this$div.div$default_8('form-group', null, _no_name_provided_$factory_66(this._$userStore_8), 2, null);
    Unit_getInstance();
    $this$div.hr$default_8('my-4', null, _no_name_provided_$factory_67(), 2, null);
    Unit_getInstance();
    $this$div.div$default_8('form-group', null, _no_name_provided_$factory_68(this._$userStore_8), 2, null);
    Unit_getInstance();
    $this$div.div$default_8('card card-body', null, _no_name_provided_$factory_69(this._$userStore_8), 2, null);
    Unit_getInstance();
  };
  _no_name_provided__83.prototype.invoke_166 = function (p1) {
    this.invoke_163(p1 instanceof Div ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__83.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__84($userStore) {
    this._$userStore_9 = $userStore;
  }
  _no_name_provided__84.prototype.invoke_165 = function ($this$render) {
    $this$render.div$default_8(null, null, _no_name_provided_$factory_63(this._$userStore_9), 3, null);
    Unit_getInstance();
  };
  _no_name_provided__84.prototype.invoke_166 = function (p1) {
    this.invoke_165(p1 instanceof Tag ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__84.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_59($userStore) {
    var i = new _no_name_provided__84($userStore);
    return function (p1) {
      i.invoke_165(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_60(this$0, resultContinuation) {
    var i = new _no_name_provided__65(this$0, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_129(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_61(this$0, resultContinuation) {
    var i = new _no_name_provided__66(this$0, resultContinuation);
    var l = function (p1, p2, $cont) {
      return i.invoke_133(p1, p2, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _no_name_provided_$factory_62(this$0, resultContinuation) {
    var i = new _no_name_provided__67(this$0, resultContinuation);
    var l = function (p1, p2, $cont) {
      return i.invoke_133(p1, p2, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function _no_name_provided_$factory_63($userStore) {
    var i = new _no_name_provided__83($userStore);
    return function (p1) {
      i.invoke_163(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_64($userStore) {
    var i = new _no_name_provided__77($userStore);
    return function (p1) {
      i.invoke_163(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_65() {
    var i = new _no_name_provided__78();
    return function (p1) {
      i.invoke_157(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_66($userStore) {
    var i = new _no_name_provided__79($userStore);
    return function (p1) {
      i.invoke_163(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_67() {
    var i = new _no_name_provided__80();
    return function (p1) {
      i.invoke_157(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_68($userStore) {
    var i = new _no_name_provided__81($userStore);
    return function (p1) {
      i.invoke_163(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_69($userStore) {
    var i = new _no_name_provided__82($userStore);
    return function (p1) {
      i.invoke_163(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_70() {
    var i = new _no_name_provided__69();
    return function (p1) {
      i.invoke_139(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_71($userStore) {
    var i = new _no_name_provided__70($userStore);
    return function (p1) {
      i.invoke_141(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_72() {
    var i = new _no_name_provided__71();
    return function (p1) {
      i.invoke_139(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_73($userStore) {
    var i = new _no_name_provided__72($userStore);
    return function (p1) {
      i.invoke_141(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_74($userStore) {
    var i = new _no_name_provided__73($userStore);
    return function (p1) {
      i.invoke_143(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_75() {
    var i = new _no_name_provided__75();
    return function (p1) {
      i.invoke_147(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_76($userStore) {
    var i = new _no_name_provided__76($userStore);
    return function (p1) {
      i.invoke_149(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_77($userStore) {
    var i = new _no_name_provided__74($userStore);
    return function (p1) {
      i.invoke_145(p1);
      return Unit_getInstance();
    };
  }
  AbstractMap.prototype._get_entries__4 = Map_0.prototype._get_entries__4;
  CombinedContext.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  AbstractCoroutineContextElement.prototype.get_39 = Element_0.prototype.get_39;
  AbstractCoroutineContextElement.prototype.fold_22 = Element_0.prototype.fold_22;
  AbstractCoroutineContextElement.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  AbstractCoroutineContextElement.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  IntIterator.prototype.hasNext_10 = Iterator.prototype.hasNext_10;
  AbstractMutableList.prototype.get_51 = List.prototype.get_51;
  AbstractMutableMap.prototype._get_entries__4 = MutableMap.prototype._get_entries__4;
  InternalHashCodeMap.prototype.createJsMap_0 = InternalMap.prototype.createJsMap_0;
  KClassImpl.prototype._get_simpleName__4 = KClass.prototype._get_simpleName__4;
  JobSupport.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  JobSupport.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  JobSupport.prototype.get_39 = Element_0.prototype.get_39;
  JobSupport.prototype.fold_22 = Element_0.prototype.fold_22;
  JobSupport.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  AbstractCoroutine.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  AbstractCoroutine.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  AbstractCoroutine.prototype.get_39 = Element_0.prototype.get_39;
  AbstractCoroutine.prototype.fold_22 = Element_0.prototype.fold_22;
  AbstractCoroutine.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  StandaloneCoroutine.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  StandaloneCoroutine.prototype.get_39 = Element_0.prototype.get_39;
  StandaloneCoroutine.prototype.fold_22 = Element_0.prototype.fold_22;
  StandaloneCoroutine.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  StandaloneCoroutine.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  LazyStandaloneCoroutine.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  LazyStandaloneCoroutine.prototype.get_39 = Element_0.prototype.get_39;
  LazyStandaloneCoroutine.prototype.fold_22 = Element_0.prototype.fold_22;
  LazyStandaloneCoroutine.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  LazyStandaloneCoroutine.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  SchedulerTask.prototype.run_3 = Runnable.prototype.run_3;
  CoroutineDispatcher.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  CoroutineDispatcher.prototype.fold_22 = Element_0.prototype.fold_22;
  CoroutineDispatcher.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  CoroutineDispatcher.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  EventLoop.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  EventLoop.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  EventLoop.prototype.fold_22 = Element_0.prototype.fold_22;
  EventLoop.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  JobImpl.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  JobImpl.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  JobImpl.prototype.get_39 = Element_0.prototype.get_39;
  JobImpl.prototype.fold_22 = Element_0.prototype.fold_22;
  JobImpl.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  MainCoroutineDispatcher.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  MainCoroutineDispatcher.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  MainCoroutineDispatcher.prototype.fold_22 = Element_0.prototype.fold_22;
  MainCoroutineDispatcher.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  SupervisorJobImpl.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  SupervisorJobImpl.prototype.get_39 = Element_0.prototype.get_39;
  SupervisorJobImpl.prototype.fold_22 = Element_0.prototype.fold_22;
  SupervisorJobImpl.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  SupervisorJobImpl.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  Unconfined.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  Unconfined.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  Unconfined.prototype.fold_22 = Element_0.prototype.fold_22;
  Unconfined.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  Receive.prototype.tryResumeReceive_3 = ReceiveOrClosed.prototype.tryResumeReceive_3;
  Receive.prototype.completeResumeReceive_3 = ReceiveOrClosed.prototype.completeResumeReceive_3;
  AbstractSendChannel.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  AbstractChannel.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  ArrayChannel.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  ChannelCoroutine.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  ChannelCoroutine.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  ChannelCoroutine.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  ChannelCoroutine.prototype.get_39 = Element_0.prototype.get_39;
  ChannelCoroutine.prototype.fold_22 = Element_0.prototype.fold_22;
  ChannelCoroutine.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  ConflatedChannel.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  LinkedListChannel.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  ProducerCoroutine.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  ProducerCoroutine.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  ProducerCoroutine.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  ProducerCoroutine.prototype.get_39 = Element_0.prototype.get_39;
  ProducerCoroutine.prototype.fold_22 = Element_0.prototype.fold_22;
  ProducerCoroutine.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  RendezvousChannel.prototype.close$default_7 = SendChannel.prototype.close$default_7;
  ScopeCoroutine.prototype.invokeOnCompletion$default_8 = Job.prototype.invokeOnCompletion$default_8;
  ScopeCoroutine.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  ScopeCoroutine.prototype.get_39 = Element_0.prototype.get_39;
  ScopeCoroutine.prototype.fold_22 = Element_0.prototype.fold_22;
  ScopeCoroutine.prototype.minusKey_23 = Element_0.prototype.minusKey_23;
  JsMainDispatcher.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  JsMainDispatcher.prototype.fold_22 = Element_0.prototype.fold_22;
  JsMainDispatcher.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  JsMainDispatcher.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  UnconfinedEventLoop.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  UnconfinedEventLoop.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  UnconfinedEventLoop.prototype.fold_22 = Element_0.prototype.fold_22;
  UnconfinedEventLoop.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  SetTimeoutBasedDispatcher.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  SetTimeoutBasedDispatcher.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  SetTimeoutBasedDispatcher.prototype.fold_22 = Element_0.prototype.fold_22;
  SetTimeoutBasedDispatcher.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  NodeDispatcher.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  NodeDispatcher.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  NodeDispatcher.prototype.fold_22 = Element_0.prototype.fold_22;
  NodeDispatcher.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  SetTimeoutDispatcher.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  SetTimeoutDispatcher.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  SetTimeoutDispatcher.prototype.fold_22 = Element_0.prototype.fold_22;
  SetTimeoutDispatcher.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  WindowDispatcher.prototype.plus_23 = CoroutineContext.prototype.plus_23;
  WindowDispatcher.prototype.get_39 = ContinuationInterceptor.prototype.get_39;
  WindowDispatcher.prototype.fold_22 = Element_0.prototype.fold_22;
  WindowDispatcher.prototype.minusKey_23 = ContinuationInterceptor.prototype.minusKey_23;
  RootStore.prototype.errorHandler_0 = Store.prototype.errorHandler_0;
  RootStore.prototype.handle_1 = Store.prototype.handle_1;
  RootStore.prototype.handle$default_1 = Store.prototype.handle$default_1;
  RootStore.prototype.handle_2 = Store.prototype.handle_2;
  RootStore.prototype.handle$default_2 = Store.prototype.handle$default_2;
  Tag.prototype.button_9 = TagContext.prototype.button_9;
  Tag.prototype.button$default_8 = TagContext.prototype.button$default_8;
  Tag.prototype.div_9 = TagContext.prototype.div_9;
  Tag.prototype.div$default_8 = TagContext.prototype.div$default_8;
  Tag.prototype.hr_8 = TagContext.prototype.hr_8;
  Tag.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  Tag.prototype.h6_8 = TagContext.prototype.h6_8;
  Tag.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  Tag.prototype.label_9 = TagContext.prototype.label_9;
  Tag.prototype.label$default_8 = TagContext.prototype.label$default_8;
  Tag.prototype.pre_8 = TagContext.prototype.pre_8;
  Tag.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  Tag.prototype.code_9 = TagContext.prototype.code_9;
  Tag.prototype.code$default_8 = TagContext.prototype.code$default_8;
  Div.prototype.button_9 = TagContext.prototype.button_9;
  Div.prototype.button$default_8 = TagContext.prototype.button$default_8;
  Div.prototype.div_9 = TagContext.prototype.div_9;
  Div.prototype.div$default_8 = TagContext.prototype.div$default_8;
  Div.prototype.hr_8 = TagContext.prototype.hr_8;
  Div.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  Div.prototype.h6_8 = TagContext.prototype.h6_8;
  Div.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  Div.prototype.input_0 = TagContext.prototype.input_0;
  Div.prototype.label_9 = TagContext.prototype.label_9;
  Div.prototype.label$default_8 = TagContext.prototype.label$default_8;
  Div.prototype.pre_8 = TagContext.prototype.pre_8;
  Div.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  Div.prototype.code_9 = TagContext.prototype.code_9;
  Div.prototype.code$default_8 = TagContext.prototype.code$default_8;
  Label.prototype.button_9 = TagContext.prototype.button_9;
  Label.prototype.button$default_8 = TagContext.prototype.button$default_8;
  Label.prototype.div_9 = TagContext.prototype.div_9;
  Label.prototype.div$default_8 = TagContext.prototype.div$default_8;
  Label.prototype.hr_8 = TagContext.prototype.hr_8;
  Label.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  Label.prototype.h6_8 = TagContext.prototype.h6_8;
  Label.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  Label.prototype.label_9 = TagContext.prototype.label_9;
  Label.prototype.label$default_8 = TagContext.prototype.label$default_8;
  Label.prototype.pre_8 = TagContext.prototype.pre_8;
  Label.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  Label.prototype.code_9 = TagContext.prototype.code_9;
  Label.prototype.code$default_8 = TagContext.prototype.code$default_8;
  Label.prototype.unaryPlus_2 = WithText.prototype.unaryPlus_2;
  Input.prototype.button_9 = TagContext.prototype.button_9;
  Input.prototype.button$default_8 = TagContext.prototype.button$default_8;
  Input.prototype.div_9 = TagContext.prototype.div_9;
  Input.prototype.div$default_8 = TagContext.prototype.div$default_8;
  Input.prototype.hr_8 = TagContext.prototype.hr_8;
  Input.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  Input.prototype.h6_8 = TagContext.prototype.h6_8;
  Input.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  Input.prototype.label_9 = TagContext.prototype.label_9;
  Input.prototype.label$default_8 = TagContext.prototype.label$default_8;
  Input.prototype.pre_8 = TagContext.prototype.pre_8;
  Input.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  Input.prototype.code_9 = TagContext.prototype.code_9;
  Input.prototype.code$default_8 = TagContext.prototype.code$default_8;
  Input.prototype.handledBy_1 = WithJob.prototype.handledBy_1;
  Input.prototype._get_changes__0 = WithEvents.prototype._get_changes__0;
  Hr.prototype.button_9 = TagContext.prototype.button_9;
  Hr.prototype.button$default_8 = TagContext.prototype.button$default_8;
  Hr.prototype.div_9 = TagContext.prototype.div_9;
  Hr.prototype.div$default_8 = TagContext.prototype.div$default_8;
  Hr.prototype.hr_8 = TagContext.prototype.hr_8;
  Hr.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  Hr.prototype.h6_8 = TagContext.prototype.h6_8;
  Hr.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  Hr.prototype.label_9 = TagContext.prototype.label_9;
  Hr.prototype.label$default_8 = TagContext.prototype.label$default_8;
  Hr.prototype.pre_8 = TagContext.prototype.pre_8;
  Hr.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  Hr.prototype.code_9 = TagContext.prototype.code_9;
  Hr.prototype.code$default_8 = TagContext.prototype.code$default_8;
  Button.prototype.button_9 = TagContext.prototype.button_9;
  Button.prototype.button$default_8 = TagContext.prototype.button$default_8;
  Button.prototype.div_9 = TagContext.prototype.div_9;
  Button.prototype.div$default_8 = TagContext.prototype.div$default_8;
  Button.prototype.hr_8 = TagContext.prototype.hr_8;
  Button.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  Button.prototype.h6_8 = TagContext.prototype.h6_8;
  Button.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  Button.prototype.label_9 = TagContext.prototype.label_9;
  Button.prototype.label$default_8 = TagContext.prototype.label$default_8;
  Button.prototype.pre_8 = TagContext.prototype.pre_8;
  Button.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  Button.prototype.code_9 = TagContext.prototype.code_9;
  Button.prototype.code$default_8 = TagContext.prototype.code$default_8;
  Button.prototype.handledBy_2 = WithJob.prototype.handledBy_2;
  Button.prototype._get_clicks__0 = WithEvents.prototype._get_clicks__0;
  Button.prototype.unaryPlus_2 = WithText.prototype.unaryPlus_2;
  H.prototype.button_9 = TagContext.prototype.button_9;
  H.prototype.button$default_8 = TagContext.prototype.button$default_8;
  H.prototype.div_9 = TagContext.prototype.div_9;
  H.prototype.div$default_8 = TagContext.prototype.div$default_8;
  H.prototype.hr_8 = TagContext.prototype.hr_8;
  H.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  H.prototype.h6_8 = TagContext.prototype.h6_8;
  H.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  H.prototype.label_9 = TagContext.prototype.label_9;
  H.prototype.label$default_8 = TagContext.prototype.label$default_8;
  H.prototype.pre_8 = TagContext.prototype.pre_8;
  H.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  H.prototype.code_9 = TagContext.prototype.code_9;
  H.prototype.code$default_8 = TagContext.prototype.code$default_8;
  H.prototype.unaryPlus_2 = WithText.prototype.unaryPlus_2;
  Pre.prototype.button_9 = TagContext.prototype.button_9;
  Pre.prototype.button$default_8 = TagContext.prototype.button$default_8;
  Pre.prototype.div_9 = TagContext.prototype.div_9;
  Pre.prototype.div$default_8 = TagContext.prototype.div$default_8;
  Pre.prototype.hr_8 = TagContext.prototype.hr_8;
  Pre.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  Pre.prototype.h6_8 = TagContext.prototype.h6_8;
  Pre.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  Pre.prototype.label_9 = TagContext.prototype.label_9;
  Pre.prototype.label$default_8 = TagContext.prototype.label$default_8;
  Pre.prototype.pre_8 = TagContext.prototype.pre_8;
  Pre.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  Pre.prototype.code_9 = TagContext.prototype.code_9;
  Pre.prototype.code$default_8 = TagContext.prototype.code$default_8;
  TextElement.prototype.button_9 = TagContext.prototype.button_9;
  TextElement.prototype.button$default_8 = TagContext.prototype.button$default_8;
  TextElement.prototype.div_9 = TagContext.prototype.div_9;
  TextElement.prototype.div$default_8 = TagContext.prototype.div$default_8;
  TextElement.prototype.hr_8 = TagContext.prototype.hr_8;
  TextElement.prototype.hr$default_8 = TagContext.prototype.hr$default_8;
  TextElement.prototype.h6_8 = TagContext.prototype.h6_8;
  TextElement.prototype.h6$default_8 = TagContext.prototype.h6$default_8;
  TextElement.prototype.label_9 = TagContext.prototype.label_9;
  TextElement.prototype.label$default_8 = TagContext.prototype.label$default_8;
  TextElement.prototype.pre_8 = TagContext.prototype.pre_8;
  TextElement.prototype.pre$default_8 = TagContext.prototype.pre$default_8;
  TextElement.prototype.code_9 = TagContext.prototype.code_9;
  TextElement.prototype.code$default_8 = TagContext.prototype.code$default_8;
  TextElement.prototype.asText_0 = WithText.prototype.asText_0;
  _no_name_provided__68.prototype.errorHandler_0 = Store.prototype.errorHandler_0;
  _no_name_provided__68.prototype.handle_1 = Store.prototype.handle_1;
  _no_name_provided__68.prototype.handle$default_1 = Store.prototype.handle$default_1;
  _no_name_provided__68.prototype.handle_2 = Store.prototype.handle_2;
  _no_name_provided__68.prototype.handle$default_2 = Store.prototype.handle$default_2;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  RESUME_TOKEN = new Symbol('RESUME_TOKEN');
  COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
  COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
  COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
  TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
  SEALED = new Symbol('SEALED');
  EMPTY_NEW = new Empty(false);
  EMPTY_ACTIVE = new Empty(true);
  EMPTY = new Symbol('EMPTY');
  OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
  OFFER_FAILED = new Symbol('OFFER_FAILED');
  POLL_FAILED = new Symbol('POLL_FAILED');
  HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
  NONE = new Symbol('NONE');
  PENDING = new Symbol('PENDING');
  EMPTY_RESUMES = EMPTY_RESUMES$init$();
  NULL = new Symbol('NULL');
  NO_DECISION = new Symbol('NO_DECISION');
  UNDEFINED = new Symbol('UNDEFINED');
  REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
  UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
  LOCKED = new Symbol('LOCKED');
  UNLOCKED = new Symbol('UNLOCKED');
  EMPTY_LOCKED = new Empty_0(LOCKED);
  EMPTY_UNLOCKED = new Empty_0(UNLOCKED);
  counter = 0;
  DEBUG = false;
  main();
  return _;
}));
