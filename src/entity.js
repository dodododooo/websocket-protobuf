/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    /**
     * PackageType enum.
     * @name pb.PackageType
     * @enum {number}
     * @property {number} PT_UNKNOWN=0 PT_UNKNOWN value
     * @property {number} PT_SIGN_IN=1 PT_SIGN_IN value
     * @property {number} PT_SYNC=2 PT_SYNC value
     * @property {number} PT_HEARTBEAT=3 PT_HEARTBEAT value
     * @property {number} PT_MESSAGE_ACK=4 PT_MESSAGE_ACK value
     * @property {number} PT_MESSAGE_SERVICE=5 PT_MESSAGE_SERVICE value
     */
    pb.PackageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PT_UNKNOWN"] = 0;
        values[valuesById[1] = "PT_SIGN_IN"] = 1;
        values[valuesById[2] = "PT_SYNC"] = 2;
        values[valuesById[3] = "PT_HEARTBEAT"] = 3;
        values[valuesById[4] = "PT_MESSAGE_ACK"] = 4;
        values[valuesById[5] = "PT_MESSAGE_SERVICE"] = 5;
        return values;
    })();

    /**
     * MsgSrvType enum.
     * @name pb.MsgSrvType
     * @enum {number}
     * @property {number} MST_CAI=0 MST_CAI value
     * @property {number} MST_IM=1 MST_IM value
     * @property {number} MST_TIM=2 MST_TIM value
     */
    pb.MsgSrvType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MST_CAI"] = 0;
        values[valuesById[1] = "MST_IM"] = 1;
        values[valuesById[2] = "MST_TIM"] = 2;
        return values;
    })();

    pb.MessageItem = (function() {

        /**
         * Properties of a MessageItem.
         * @memberof pb
         * @interface IMessageItem
         * @property {number|Long|null} [requestId] MessageItem requestId
         * @property {pb.SenderType|null} [senderType] MessageItem senderType
         * @property {string|null} [senderId] MessageItem senderId
         * @property {string|null} [senderDeviceId] MessageItem senderDeviceId
         * @property {pb.ReceiverType|null} [receiverType] MessageItem receiverType
         * @property {string|null} [receiverId] MessageItem receiverId
         * @property {Array.<string>|null} [toUserIds] MessageItem toUserIds
         * @property {pb.IMessageBody|null} [messageBody] MessageItem messageBody
         * @property {number|Long|null} [seq] MessageItem seq
         * @property {number|Long|null} [sendAt] MessageItem sendAt
         * @property {pb.MessageStatus|null} [status] MessageItem status
         */

        /**
         * Constructs a new MessageItem.
         * @memberof pb
         * @classdesc Represents a MessageItem.
         * @implements IMessageItem
         * @constructor
         * @param {pb.IMessageItem=} [properties] Properties to set
         */
        function MessageItem(properties) {
            this.toUserIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageItem requestId.
         * @member {number|Long} requestId
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageItem senderType.
         * @member {pb.SenderType} senderType
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.senderType = 0;

        /**
         * MessageItem senderId.
         * @member {string} senderId
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.senderId = "";

        /**
         * MessageItem senderDeviceId.
         * @member {string} senderDeviceId
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.senderDeviceId = "";

        /**
         * MessageItem receiverType.
         * @member {pb.ReceiverType} receiverType
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.receiverType = 0;

        /**
         * MessageItem receiverId.
         * @member {string} receiverId
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.receiverId = "";

        /**
         * MessageItem toUserIds.
         * @member {Array.<string>} toUserIds
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.toUserIds = $util.emptyArray;

        /**
         * MessageItem messageBody.
         * @member {pb.IMessageBody|null|undefined} messageBody
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.messageBody = null;

        /**
         * MessageItem seq.
         * @member {number|Long} seq
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageItem sendAt.
         * @member {number|Long} sendAt
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.sendAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageItem status.
         * @member {pb.MessageStatus} status
         * @memberof pb.MessageItem
         * @instance
         */
        MessageItem.prototype.status = 0;

        /**
         * Creates a new MessageItem instance using the specified properties.
         * @function create
         * @memberof pb.MessageItem
         * @static
         * @param {pb.IMessageItem=} [properties] Properties to set
         * @returns {pb.MessageItem} MessageItem instance
         */
        MessageItem.create = function create(properties) {
            return new MessageItem(properties);
        };

        /**
         * Encodes the specified MessageItem message. Does not implicitly {@link pb.MessageItem.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageItem
         * @static
         * @param {pb.IMessageItem} message MessageItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.requestId);
            if (message.senderType != null && Object.hasOwnProperty.call(message, "senderType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.senderType);
            if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.senderId);
            if (message.senderDeviceId != null && Object.hasOwnProperty.call(message, "senderDeviceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderDeviceId);
            if (message.receiverType != null && Object.hasOwnProperty.call(message, "receiverType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.receiverType);
            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.receiverId);
            if (message.toUserIds != null && message.toUserIds.length)
                for (var i = 0; i < message.toUserIds.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.toUserIds[i]);
            if (message.messageBody != null && Object.hasOwnProperty.call(message, "messageBody"))
                $root.pb.MessageBody.encode(message.messageBody, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.seq);
            if (message.sendAt != null && Object.hasOwnProperty.call(message, "sendAt"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.sendAt);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified MessageItem message, length delimited. Does not implicitly {@link pb.MessageItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageItem
         * @static
         * @param {pb.IMessageItem} message MessageItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageItem} MessageItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
                    break;
                case 2:
                    message.senderType = reader.int32();
                    break;
                case 3:
                    message.senderId = reader.string();
                    break;
                case 4:
                    message.senderDeviceId = reader.string();
                    break;
                case 5:
                    message.receiverType = reader.int32();
                    break;
                case 6:
                    message.receiverId = reader.string();
                    break;
                case 7:
                    if (!(message.toUserIds && message.toUserIds.length))
                        message.toUserIds = [];
                    message.toUserIds.push(reader.string());
                    break;
                case 8:
                    message.messageBody = $root.pb.MessageBody.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.seq = reader.int64();
                    break;
                case 10:
                    message.sendAt = reader.int64();
                    break;
                case 11:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageItem} MessageItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageItem message.
         * @function verify
         * @memberof pb.MessageItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                    return "requestId: integer|Long expected";
            if (message.senderType != null && message.hasOwnProperty("senderType"))
                switch (message.senderType) {
                default:
                    return "senderType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isString(message.senderId))
                    return "senderId: string expected";
            if (message.senderDeviceId != null && message.hasOwnProperty("senderDeviceId"))
                if (!$util.isString(message.senderDeviceId))
                    return "senderDeviceId: string expected";
            if (message.receiverType != null && message.hasOwnProperty("receiverType"))
                switch (message.receiverType) {
                default:
                    return "receiverType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (!$util.isString(message.receiverId))
                    return "receiverId: string expected";
            if (message.toUserIds != null && message.hasOwnProperty("toUserIds")) {
                if (!Array.isArray(message.toUserIds))
                    return "toUserIds: array expected";
                for (var i = 0; i < message.toUserIds.length; ++i)
                    if (!$util.isString(message.toUserIds[i]))
                        return "toUserIds: string[] expected";
            }
            if (message.messageBody != null && message.hasOwnProperty("messageBody")) {
                var error = $root.pb.MessageBody.verify(message.messageBody);
                if (error)
                    return "messageBody." + error;
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.sendAt != null && message.hasOwnProperty("sendAt"))
                if (!$util.isInteger(message.sendAt) && !(message.sendAt && $util.isInteger(message.sendAt.low) && $util.isInteger(message.sendAt.high)))
                    return "sendAt: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a MessageItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageItem} MessageItem
         */
        MessageItem.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageItem)
                return object;
            var message = new $root.pb.MessageItem();
            if (object.requestId != null)
                if ($util.Long)
                    (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                else if (typeof object.requestId === "string")
                    message.requestId = parseInt(object.requestId, 10);
                else if (typeof object.requestId === "number")
                    message.requestId = object.requestId;
                else if (typeof object.requestId === "object")
                    message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
            switch (object.senderType) {
            case "ST_UNKNOWN":
            case 0:
                message.senderType = 0;
                break;
            case "ST_SYSTEM":
            case 1:
                message.senderType = 1;
                break;
            case "ST_TEMP_USER":
            case 2:
                message.senderType = 2;
                break;
            case "ST_USER":
            case 3:
                message.senderType = 3;
                break;
            case "ST_BUSINESS":
            case 4:
                message.senderType = 4;
                break;
            }
            if (object.senderId != null)
                message.senderId = String(object.senderId);
            if (object.senderDeviceId != null)
                message.senderDeviceId = String(object.senderDeviceId);
            switch (object.receiverType) {
            case "RT_UNKNOWN":
            case 0:
                message.receiverType = 0;
                break;
            case "RT_USER":
            case 1:
                message.receiverType = 1;
                break;
            case "RT_NORMAL_GROUP":
            case 2:
                message.receiverType = 2;
                break;
            case "RT_LARGE_GROUP":
            case 3:
                message.receiverType = 3;
                break;
            }
            if (object.receiverId != null)
                message.receiverId = String(object.receiverId);
            if (object.toUserIds) {
                if (!Array.isArray(object.toUserIds))
                    throw TypeError(".pb.MessageItem.toUserIds: array expected");
                message.toUserIds = [];
                for (var i = 0; i < object.toUserIds.length; ++i)
                    message.toUserIds[i] = String(object.toUserIds[i]);
            }
            if (object.messageBody != null) {
                if (typeof object.messageBody !== "object")
                    throw TypeError(".pb.MessageItem.messageBody: object expected");
                message.messageBody = $root.pb.MessageBody.fromObject(object.messageBody);
            }
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            if (object.sendAt != null)
                if ($util.Long)
                    (message.sendAt = $util.Long.fromValue(object.sendAt)).unsigned = false;
                else if (typeof object.sendAt === "string")
                    message.sendAt = parseInt(object.sendAt, 10);
                else if (typeof object.sendAt === "number")
                    message.sendAt = object.sendAt;
                else if (typeof object.sendAt === "object")
                    message.sendAt = new $util.LongBits(object.sendAt.low >>> 0, object.sendAt.high >>> 0).toNumber();
            switch (object.status) {
            case "MS_UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "MS_NORMAL":
            case 1:
                message.status = 1;
                break;
            case "MS_RECALL":
            case 2:
                message.status = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageItem
         * @static
         * @param {pb.MessageItem} message MessageItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.toUserIds = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestId = options.longs === String ? "0" : 0;
                object.senderType = options.enums === String ? "ST_UNKNOWN" : 0;
                object.senderId = "";
                object.senderDeviceId = "";
                object.receiverType = options.enums === String ? "RT_UNKNOWN" : 0;
                object.receiverId = "";
                object.messageBody = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendAt = options.longs === String ? "0" : 0;
                object.status = options.enums === String ? "MS_UNKNOWN" : 0;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (typeof message.requestId === "number")
                    object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                else
                    object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
            if (message.senderType != null && message.hasOwnProperty("senderType"))
                object.senderType = options.enums === String ? $root.pb.SenderType[message.senderType] : message.senderType;
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = message.senderId;
            if (message.senderDeviceId != null && message.hasOwnProperty("senderDeviceId"))
                object.senderDeviceId = message.senderDeviceId;
            if (message.receiverType != null && message.hasOwnProperty("receiverType"))
                object.receiverType = options.enums === String ? $root.pb.ReceiverType[message.receiverType] : message.receiverType;
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                object.receiverId = message.receiverId;
            if (message.toUserIds && message.toUserIds.length) {
                object.toUserIds = [];
                for (var j = 0; j < message.toUserIds.length; ++j)
                    object.toUserIds[j] = message.toUserIds[j];
            }
            if (message.messageBody != null && message.hasOwnProperty("messageBody"))
                object.messageBody = $root.pb.MessageBody.toObject(message.messageBody, options);
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            if (message.sendAt != null && message.hasOwnProperty("sendAt"))
                if (typeof message.sendAt === "number")
                    object.sendAt = options.longs === String ? String(message.sendAt) : message.sendAt;
                else
                    object.sendAt = options.longs === String ? $util.Long.prototype.toString.call(message.sendAt) : options.longs === Number ? new $util.LongBits(message.sendAt.low >>> 0, message.sendAt.high >>> 0).toNumber() : message.sendAt;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.pb.MessageStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this MessageItem to JSON.
         * @function toJSON
         * @memberof pb.MessageItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageItem;
    })();

    /**
     * SenderType enum.
     * @name pb.SenderType
     * @enum {number}
     * @property {number} ST_UNKNOWN=0 ST_UNKNOWN value
     * @property {number} ST_SYSTEM=1 ST_SYSTEM value
     * @property {number} ST_TEMP_USER=2 ST_TEMP_USER value
     * @property {number} ST_USER=3 ST_USER value
     * @property {number} ST_BUSINESS=4 ST_BUSINESS value
     */
    pb.SenderType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ST_UNKNOWN"] = 0;
        values[valuesById[1] = "ST_SYSTEM"] = 1;
        values[valuesById[2] = "ST_TEMP_USER"] = 2;
        values[valuesById[3] = "ST_USER"] = 3;
        values[valuesById[4] = "ST_BUSINESS"] = 4;
        return values;
    })();

    /**
     * ReceiverType enum.
     * @name pb.ReceiverType
     * @enum {number}
     * @property {number} RT_UNKNOWN=0 RT_UNKNOWN value
     * @property {number} RT_USER=1 RT_USER value
     * @property {number} RT_NORMAL_GROUP=2 RT_NORMAL_GROUP value
     * @property {number} RT_LARGE_GROUP=3 RT_LARGE_GROUP value
     */
    pb.ReceiverType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RT_UNKNOWN"] = 0;
        values[valuesById[1] = "RT_USER"] = 1;
        values[valuesById[2] = "RT_NORMAL_GROUP"] = 2;
        values[valuesById[3] = "RT_LARGE_GROUP"] = 3;
        return values;
    })();

    /**
     * MessageStatus enum.
     * @name pb.MessageStatus
     * @enum {number}
     * @property {number} MS_UNKNOWN=0 MS_UNKNOWN value
     * @property {number} MS_NORMAL=1 MS_NORMAL value
     * @property {number} MS_RECALL=2 MS_RECALL value
     */
    pb.MessageStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MS_UNKNOWN"] = 0;
        values[valuesById[1] = "MS_NORMAL"] = 1;
        values[valuesById[2] = "MS_RECALL"] = 2;
        return values;
    })();

    pb.MessageBody = (function() {

        /**
         * Properties of a MessageBody.
         * @memberof pb
         * @interface IMessageBody
         * @property {pb.MessageType|null} [messageType] MessageBody messageType
         * @property {pb.IMessageContent|null} [messageContent] MessageBody messageContent
         */

        /**
         * Constructs a new MessageBody.
         * @memberof pb
         * @classdesc Represents a MessageBody.
         * @implements IMessageBody
         * @constructor
         * @param {pb.IMessageBody=} [properties] Properties to set
         */
        function MessageBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageBody messageType.
         * @member {pb.MessageType} messageType
         * @memberof pb.MessageBody
         * @instance
         */
        MessageBody.prototype.messageType = 0;

        /**
         * MessageBody messageContent.
         * @member {pb.IMessageContent|null|undefined} messageContent
         * @memberof pb.MessageBody
         * @instance
         */
        MessageBody.prototype.messageContent = null;

        /**
         * Creates a new MessageBody instance using the specified properties.
         * @function create
         * @memberof pb.MessageBody
         * @static
         * @param {pb.IMessageBody=} [properties] Properties to set
         * @returns {pb.MessageBody} MessageBody instance
         */
        MessageBody.create = function create(properties) {
            return new MessageBody(properties);
        };

        /**
         * Encodes the specified MessageBody message. Does not implicitly {@link pb.MessageBody.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageBody
         * @static
         * @param {pb.IMessageBody} message MessageBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            if (message.messageContent != null && Object.hasOwnProperty.call(message, "messageContent"))
                $root.pb.MessageContent.encode(message.messageContent, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessageBody message, length delimited. Does not implicitly {@link pb.MessageBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageBody
         * @static
         * @param {pb.IMessageBody} message MessageBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageBody message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageBody} MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.int32();
                    break;
                case 2:
                    message.messageContent = $root.pb.MessageContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageBody} MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageBody message.
         * @function verify
         * @memberof pb.MessageBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.messageContent != null && message.hasOwnProperty("messageContent")) {
                var error = $root.pb.MessageContent.verify(message.messageContent);
                if (error)
                    return "messageContent." + error;
            }
            return null;
        };

        /**
         * Creates a MessageBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageBody} MessageBody
         */
        MessageBody.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageBody)
                return object;
            var message = new $root.pb.MessageBody();
            switch (object.messageType) {
            case "MT_UNKNOWN":
            case 0:
                message.messageType = 0;
                break;
            case "MT_TEXT":
            case 1:
                message.messageType = 1;
                break;
            case "MT_FACE":
            case 2:
                message.messageType = 2;
                break;
            case "MT_VOICE":
            case 3:
                message.messageType = 3;
                break;
            case "MT_IMAGE":
            case 4:
                message.messageType = 4;
                break;
            case "MT_FILE":
            case 5:
                message.messageType = 5;
                break;
            case "MT_LOCATION":
            case 6:
                message.messageType = 6;
                break;
            case "MT_PRODUCT":
            case 7:
                message.messageType = 7;
                break;
            case "MT_ORDER":
            case 8:
                message.messageType = 8;
                break;
            case "MT_COMMAND":
            case 9:
                message.messageType = 9;
                break;
            }
            if (object.messageContent != null) {
                if (typeof object.messageContent !== "object")
                    throw TypeError(".pb.MessageBody.messageContent: object expected");
                message.messageContent = $root.pb.MessageContent.fromObject(object.messageContent);
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageBody
         * @static
         * @param {pb.MessageBody} message MessageBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = options.enums === String ? "MT_UNKNOWN" : 0;
                object.messageContent = null;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.pb.MessageType[message.messageType] : message.messageType;
            if (message.messageContent != null && message.hasOwnProperty("messageContent"))
                object.messageContent = $root.pb.MessageContent.toObject(message.messageContent, options);
            return object;
        };

        /**
         * Converts this MessageBody to JSON.
         * @function toJSON
         * @memberof pb.MessageBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageBody;
    })();

    /**
     * MessageType enum.
     * @name pb.MessageType
     * @enum {number}
     * @property {number} MT_UNKNOWN=0 MT_UNKNOWN value
     * @property {number} MT_TEXT=1 MT_TEXT value
     * @property {number} MT_FACE=2 MT_FACE value
     * @property {number} MT_VOICE=3 MT_VOICE value
     * @property {number} MT_IMAGE=4 MT_IMAGE value
     * @property {number} MT_FILE=5 MT_FILE value
     * @property {number} MT_LOCATION=6 MT_LOCATION value
     * @property {number} MT_PRODUCT=7 MT_PRODUCT value
     * @property {number} MT_ORDER=8 MT_ORDER value
     * @property {number} MT_COMMAND=9 MT_COMMAND value
     */
    pb.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MT_UNKNOWN"] = 0;
        values[valuesById[1] = "MT_TEXT"] = 1;
        values[valuesById[2] = "MT_FACE"] = 2;
        values[valuesById[3] = "MT_VOICE"] = 3;
        values[valuesById[4] = "MT_IMAGE"] = 4;
        values[valuesById[5] = "MT_FILE"] = 5;
        values[valuesById[6] = "MT_LOCATION"] = 6;
        values[valuesById[7] = "MT_PRODUCT"] = 7;
        values[valuesById[8] = "MT_ORDER"] = 8;
        values[valuesById[9] = "MT_COMMAND"] = 9;
        return values;
    })();

    pb.MessageContent = (function() {

        /**
         * Properties of a MessageContent.
         * @memberof pb
         * @interface IMessageContent
         * @property {pb.IText|null} [text] MessageContent text
         * @property {pb.IFace|null} [face] MessageContent face
         * @property {pb.IVoice|null} [voice] MessageContent voice
         * @property {pb.IImage|null} [image] MessageContent image
         * @property {pb.IFile|null} [file] MessageContent file
         * @property {pb.ILocation|null} [location] MessageContent location
         * @property {pb.IProduct|null} [product] MessageContent product
         * @property {pb.IOrder|null} [order] MessageContent order
         * @property {pb.ICommand|null} [command] MessageContent command
         */

        /**
         * Constructs a new MessageContent.
         * @memberof pb
         * @classdesc Represents a MessageContent.
         * @implements IMessageContent
         * @constructor
         * @param {pb.IMessageContent=} [properties] Properties to set
         */
        function MessageContent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageContent text.
         * @member {pb.IText|null|undefined} text
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.text = null;

        /**
         * MessageContent face.
         * @member {pb.IFace|null|undefined} face
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.face = null;

        /**
         * MessageContent voice.
         * @member {pb.IVoice|null|undefined} voice
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.voice = null;

        /**
         * MessageContent image.
         * @member {pb.IImage|null|undefined} image
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.image = null;

        /**
         * MessageContent file.
         * @member {pb.IFile|null|undefined} file
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.file = null;

        /**
         * MessageContent location.
         * @member {pb.ILocation|null|undefined} location
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.location = null;

        /**
         * MessageContent product.
         * @member {pb.IProduct|null|undefined} product
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.product = null;

        /**
         * MessageContent order.
         * @member {pb.IOrder|null|undefined} order
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.order = null;

        /**
         * MessageContent command.
         * @member {pb.ICommand|null|undefined} command
         * @memberof pb.MessageContent
         * @instance
         */
        MessageContent.prototype.command = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * MessageContent content.
         * @member {"text"|"face"|"voice"|"image"|"file"|"location"|"product"|"order"|"command"|undefined} content
         * @memberof pb.MessageContent
         * @instance
         */
        Object.defineProperty(MessageContent.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["text", "face", "voice", "image", "file", "location", "product", "order", "command"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MessageContent instance using the specified properties.
         * @function create
         * @memberof pb.MessageContent
         * @static
         * @param {pb.IMessageContent=} [properties] Properties to set
         * @returns {pb.MessageContent} MessageContent instance
         */
        MessageContent.create = function create(properties) {
            return new MessageContent(properties);
        };

        /**
         * Encodes the specified MessageContent message. Does not implicitly {@link pb.MessageContent.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageContent
         * @static
         * @param {pb.IMessageContent} message MessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                $root.pb.Text.encode(message.text, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.face != null && Object.hasOwnProperty.call(message, "face"))
                $root.pb.Face.encode(message.face, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.voice != null && Object.hasOwnProperty.call(message, "voice"))
                $root.pb.Voice.encode(message.voice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                $root.pb.Image.encode(message.image, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.pb.File.encode(message.file, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                $root.pb.Location.encode(message.location, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                $root.pb.Product.encode(message.product, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                $root.pb.Order.encode(message.order, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                $root.pb.Command.encode(message.command, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessageContent message, length delimited. Does not implicitly {@link pb.MessageContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageContent
         * @static
         * @param {pb.IMessageContent} message MessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageContent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageContent} MessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageContent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = $root.pb.Text.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.face = $root.pb.Face.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voice = $root.pb.Voice.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.image = $root.pb.Image.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.file = $root.pb.File.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.location = $root.pb.Location.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.product = $root.pb.Product.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.order = $root.pb.Order.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.command = $root.pb.Command.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageContent} MessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageContent message.
         * @function verify
         * @memberof pb.MessageContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.text != null && message.hasOwnProperty("text")) {
                properties.content = 1;
                {
                    var error = $root.pb.Text.verify(message.text);
                    if (error)
                        return "text." + error;
                }
            }
            if (message.face != null && message.hasOwnProperty("face")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.Face.verify(message.face);
                    if (error)
                        return "face." + error;
                }
            }
            if (message.voice != null && message.hasOwnProperty("voice")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.Voice.verify(message.voice);
                    if (error)
                        return "voice." + error;
                }
            }
            if (message.image != null && message.hasOwnProperty("image")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.Image.verify(message.image);
                    if (error)
                        return "image." + error;
                }
            }
            if (message.file != null && message.hasOwnProperty("file")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.File.verify(message.file);
                    if (error)
                        return "file." + error;
                }
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.Location.verify(message.location);
                    if (error)
                        return "location." + error;
                }
            }
            if (message.product != null && message.hasOwnProperty("product")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.Product.verify(message.product);
                    if (error)
                        return "product." + error;
                }
            }
            if (message.order != null && message.hasOwnProperty("order")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.Order.verify(message.order);
                    if (error)
                        return "order." + error;
                }
            }
            if (message.command != null && message.hasOwnProperty("command")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.pb.Command.verify(message.command);
                    if (error)
                        return "command." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MessageContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageContent} MessageContent
         */
        MessageContent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageContent)
                return object;
            var message = new $root.pb.MessageContent();
            if (object.text != null) {
                if (typeof object.text !== "object")
                    throw TypeError(".pb.MessageContent.text: object expected");
                message.text = $root.pb.Text.fromObject(object.text);
            }
            if (object.face != null) {
                if (typeof object.face !== "object")
                    throw TypeError(".pb.MessageContent.face: object expected");
                message.face = $root.pb.Face.fromObject(object.face);
            }
            if (object.voice != null) {
                if (typeof object.voice !== "object")
                    throw TypeError(".pb.MessageContent.voice: object expected");
                message.voice = $root.pb.Voice.fromObject(object.voice);
            }
            if (object.image != null) {
                if (typeof object.image !== "object")
                    throw TypeError(".pb.MessageContent.image: object expected");
                message.image = $root.pb.Image.fromObject(object.image);
            }
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".pb.MessageContent.file: object expected");
                message.file = $root.pb.File.fromObject(object.file);
            }
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".pb.MessageContent.location: object expected");
                message.location = $root.pb.Location.fromObject(object.location);
            }
            if (object.product != null) {
                if (typeof object.product !== "object")
                    throw TypeError(".pb.MessageContent.product: object expected");
                message.product = $root.pb.Product.fromObject(object.product);
            }
            if (object.order != null) {
                if (typeof object.order !== "object")
                    throw TypeError(".pb.MessageContent.order: object expected");
                message.order = $root.pb.Order.fromObject(object.order);
            }
            if (object.command != null) {
                if (typeof object.command !== "object")
                    throw TypeError(".pb.MessageContent.command: object expected");
                message.command = $root.pb.Command.fromObject(object.command);
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageContent
         * @static
         * @param {pb.MessageContent} message MessageContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = $root.pb.Text.toObject(message.text, options);
                if (options.oneofs)
                    object.content = "text";
            }
            if (message.face != null && message.hasOwnProperty("face")) {
                object.face = $root.pb.Face.toObject(message.face, options);
                if (options.oneofs)
                    object.content = "face";
            }
            if (message.voice != null && message.hasOwnProperty("voice")) {
                object.voice = $root.pb.Voice.toObject(message.voice, options);
                if (options.oneofs)
                    object.content = "voice";
            }
            if (message.image != null && message.hasOwnProperty("image")) {
                object.image = $root.pb.Image.toObject(message.image, options);
                if (options.oneofs)
                    object.content = "image";
            }
            if (message.file != null && message.hasOwnProperty("file")) {
                object.file = $root.pb.File.toObject(message.file, options);
                if (options.oneofs)
                    object.content = "file";
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                object.location = $root.pb.Location.toObject(message.location, options);
                if (options.oneofs)
                    object.content = "location";
            }
            if (message.product != null && message.hasOwnProperty("product")) {
                object.product = $root.pb.Product.toObject(message.product, options);
                if (options.oneofs)
                    object.content = "product";
            }
            if (message.order != null && message.hasOwnProperty("order")) {
                object.order = $root.pb.Order.toObject(message.order, options);
                if (options.oneofs)
                    object.content = "order";
            }
            if (message.command != null && message.hasOwnProperty("command")) {
                object.command = $root.pb.Command.toObject(message.command, options);
                if (options.oneofs)
                    object.content = "command";
            }
            return object;
        };

        /**
         * Converts this MessageContent to JSON.
         * @function toJSON
         * @memberof pb.MessageContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageContent;
    })();

    pb.Text = (function() {

        /**
         * Properties of a Text.
         * @memberof pb
         * @interface IText
         * @property {string|null} [text] Text text
         */

        /**
         * Constructs a new Text.
         * @memberof pb
         * @classdesc Represents a Text.
         * @implements IText
         * @constructor
         * @param {pb.IText=} [properties] Properties to set
         */
        function Text(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Text text.
         * @member {string} text
         * @memberof pb.Text
         * @instance
         */
        Text.prototype.text = "";

        /**
         * Creates a new Text instance using the specified properties.
         * @function create
         * @memberof pb.Text
         * @static
         * @param {pb.IText=} [properties] Properties to set
         * @returns {pb.Text} Text instance
         */
        Text.create = function create(properties) {
            return new Text(properties);
        };

        /**
         * Encodes the specified Text message. Does not implicitly {@link pb.Text.verify|verify} messages.
         * @function encode
         * @memberof pb.Text
         * @static
         * @param {pb.IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Text.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified Text message, length delimited. Does not implicitly {@link pb.Text.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Text
         * @static
         * @param {pb.IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Text.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Text message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Text.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Text();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Text message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Text.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Text message.
         * @function verify
         * @memberof pb.Text
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Text.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a Text message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Text
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Text} Text
         */
        Text.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Text)
                return object;
            var message = new $root.pb.Text();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a Text message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Text
         * @static
         * @param {pb.Text} message Text
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Text.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this Text to JSON.
         * @function toJSON
         * @memberof pb.Text
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Text.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Text;
    })();

    pb.Face = (function() {

        /**
         * Properties of a Face.
         * @memberof pb
         * @interface IFace
         * @property {number|Long|null} [faceId] Face faceId
         * @property {string|null} [faceUrl] Face faceUrl
         */

        /**
         * Constructs a new Face.
         * @memberof pb
         * @classdesc Represents a Face.
         * @implements IFace
         * @constructor
         * @param {pb.IFace=} [properties] Properties to set
         */
        function Face(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Face faceId.
         * @member {number|Long} faceId
         * @memberof pb.Face
         * @instance
         */
        Face.prototype.faceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Face faceUrl.
         * @member {string} faceUrl
         * @memberof pb.Face
         * @instance
         */
        Face.prototype.faceUrl = "";

        /**
         * Creates a new Face instance using the specified properties.
         * @function create
         * @memberof pb.Face
         * @static
         * @param {pb.IFace=} [properties] Properties to set
         * @returns {pb.Face} Face instance
         */
        Face.create = function create(properties) {
            return new Face(properties);
        };

        /**
         * Encodes the specified Face message. Does not implicitly {@link pb.Face.verify|verify} messages.
         * @function encode
         * @memberof pb.Face
         * @static
         * @param {pb.IFace} message Face message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Face.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.faceId != null && Object.hasOwnProperty.call(message, "faceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.faceId);
            if (message.faceUrl != null && Object.hasOwnProperty.call(message, "faceUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.faceUrl);
            return writer;
        };

        /**
         * Encodes the specified Face message, length delimited. Does not implicitly {@link pb.Face.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Face
         * @static
         * @param {pb.IFace} message Face message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Face.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Face message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Face
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Face} Face
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Face.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Face();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.faceId = reader.int64();
                    break;
                case 2:
                    message.faceUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Face message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Face
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Face} Face
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Face.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Face message.
         * @function verify
         * @memberof pb.Face
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Face.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.faceId != null && message.hasOwnProperty("faceId"))
                if (!$util.isInteger(message.faceId) && !(message.faceId && $util.isInteger(message.faceId.low) && $util.isInteger(message.faceId.high)))
                    return "faceId: integer|Long expected";
            if (message.faceUrl != null && message.hasOwnProperty("faceUrl"))
                if (!$util.isString(message.faceUrl))
                    return "faceUrl: string expected";
            return null;
        };

        /**
         * Creates a Face message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Face
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Face} Face
         */
        Face.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Face)
                return object;
            var message = new $root.pb.Face();
            if (object.faceId != null)
                if ($util.Long)
                    (message.faceId = $util.Long.fromValue(object.faceId)).unsigned = false;
                else if (typeof object.faceId === "string")
                    message.faceId = parseInt(object.faceId, 10);
                else if (typeof object.faceId === "number")
                    message.faceId = object.faceId;
                else if (typeof object.faceId === "object")
                    message.faceId = new $util.LongBits(object.faceId.low >>> 0, object.faceId.high >>> 0).toNumber();
            if (object.faceUrl != null)
                message.faceUrl = String(object.faceUrl);
            return message;
        };

        /**
         * Creates a plain object from a Face message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Face
         * @static
         * @param {pb.Face} message Face
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Face.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.faceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.faceId = options.longs === String ? "0" : 0;
                object.faceUrl = "";
            }
            if (message.faceId != null && message.hasOwnProperty("faceId"))
                if (typeof message.faceId === "number")
                    object.faceId = options.longs === String ? String(message.faceId) : message.faceId;
                else
                    object.faceId = options.longs === String ? $util.Long.prototype.toString.call(message.faceId) : options.longs === Number ? new $util.LongBits(message.faceId.low >>> 0, message.faceId.high >>> 0).toNumber() : message.faceId;
            if (message.faceUrl != null && message.hasOwnProperty("faceUrl"))
                object.faceUrl = message.faceUrl;
            return object;
        };

        /**
         * Converts this Face to JSON.
         * @function toJSON
         * @memberof pb.Face
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Face.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Face;
    })();

    pb.Voice = (function() {

        /**
         * Properties of a Voice.
         * @memberof pb
         * @interface IVoice
         * @property {string|null} [id] Voice id
         * @property {number|null} [size] Voice size
         * @property {number|null} [duration] Voice duration
         * @property {string|null} [url] Voice url
         */

        /**
         * Constructs a new Voice.
         * @memberof pb
         * @classdesc Represents a Voice.
         * @implements IVoice
         * @constructor
         * @param {pb.IVoice=} [properties] Properties to set
         */
        function Voice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Voice id.
         * @member {string} id
         * @memberof pb.Voice
         * @instance
         */
        Voice.prototype.id = "";

        /**
         * Voice size.
         * @member {number} size
         * @memberof pb.Voice
         * @instance
         */
        Voice.prototype.size = 0;

        /**
         * Voice duration.
         * @member {number} duration
         * @memberof pb.Voice
         * @instance
         */
        Voice.prototype.duration = 0;

        /**
         * Voice url.
         * @member {string} url
         * @memberof pb.Voice
         * @instance
         */
        Voice.prototype.url = "";

        /**
         * Creates a new Voice instance using the specified properties.
         * @function create
         * @memberof pb.Voice
         * @static
         * @param {pb.IVoice=} [properties] Properties to set
         * @returns {pb.Voice} Voice instance
         */
        Voice.create = function create(properties) {
            return new Voice(properties);
        };

        /**
         * Encodes the specified Voice message. Does not implicitly {@link pb.Voice.verify|verify} messages.
         * @function encode
         * @memberof pb.Voice
         * @static
         * @param {pb.IVoice} message Voice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Voice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.size);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.duration);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified Voice message, length delimited. Does not implicitly {@link pb.Voice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Voice
         * @static
         * @param {pb.IVoice} message Voice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Voice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Voice message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Voice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Voice} Voice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Voice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Voice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.size = reader.int32();
                    break;
                case 3:
                    message.duration = reader.int32();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Voice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Voice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Voice} Voice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Voice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Voice message.
         * @function verify
         * @memberof pb.Voice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Voice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a Voice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Voice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Voice} Voice
         */
        Voice.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Voice)
                return object;
            var message = new $root.pb.Voice();
            if (object.id != null)
                message.id = String(object.id);
            if (object.size != null)
                message.size = object.size | 0;
            if (object.duration != null)
                message.duration = object.duration | 0;
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a Voice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Voice
         * @static
         * @param {pb.Voice} message Voice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Voice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.size = 0;
                object.duration = 0;
                object.url = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this Voice to JSON.
         * @function toJSON
         * @memberof pb.Voice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Voice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Voice;
    })();

    pb.Image = (function() {

        /**
         * Properties of an Image.
         * @memberof pb
         * @interface IImage
         * @property {string|null} [id] Image id
         * @property {number|null} [width] Image width
         * @property {number|null} [height] Image height
         * @property {string|null} [url] Image url
         * @property {string|null} [thumbnailUrl] Image thumbnailUrl
         */

        /**
         * Constructs a new Image.
         * @memberof pb
         * @classdesc Represents an Image.
         * @implements IImage
         * @constructor
         * @param {pb.IImage=} [properties] Properties to set
         */
        function Image(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Image id.
         * @member {string} id
         * @memberof pb.Image
         * @instance
         */
        Image.prototype.id = "";

        /**
         * Image width.
         * @member {number} width
         * @memberof pb.Image
         * @instance
         */
        Image.prototype.width = 0;

        /**
         * Image height.
         * @member {number} height
         * @memberof pb.Image
         * @instance
         */
        Image.prototype.height = 0;

        /**
         * Image url.
         * @member {string} url
         * @memberof pb.Image
         * @instance
         */
        Image.prototype.url = "";

        /**
         * Image thumbnailUrl.
         * @member {string} thumbnailUrl
         * @memberof pb.Image
         * @instance
         */
        Image.prototype.thumbnailUrl = "";

        /**
         * Creates a new Image instance using the specified properties.
         * @function create
         * @memberof pb.Image
         * @static
         * @param {pb.IImage=} [properties] Properties to set
         * @returns {pb.Image} Image instance
         */
        Image.create = function create(properties) {
            return new Image(properties);
        };

        /**
         * Encodes the specified Image message. Does not implicitly {@link pb.Image.verify|verify} messages.
         * @function encode
         * @memberof pb.Image
         * @static
         * @param {pb.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.height);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.thumbnailUrl);
            return writer;
        };

        /**
         * Encodes the specified Image message, length delimited. Does not implicitly {@link pb.Image.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Image
         * @static
         * @param {pb.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Image();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.width = reader.int32();
                    break;
                case 3:
                    message.height = reader.int32();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.thumbnailUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Image message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Image message.
         * @function verify
         * @memberof pb.Image
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Image.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl"))
                if (!$util.isString(message.thumbnailUrl))
                    return "thumbnailUrl: string expected";
            return null;
        };

        /**
         * Creates an Image message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Image
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Image} Image
         */
        Image.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Image)
                return object;
            var message = new $root.pb.Image();
            if (object.id != null)
                message.id = String(object.id);
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.thumbnailUrl != null)
                message.thumbnailUrl = String(object.thumbnailUrl);
            return message;
        };

        /**
         * Creates a plain object from an Image message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Image
         * @static
         * @param {pb.Image} message Image
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Image.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.width = 0;
                object.height = 0;
                object.url = "";
                object.thumbnailUrl = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl"))
                object.thumbnailUrl = message.thumbnailUrl;
            return object;
        };

        /**
         * Converts this Image to JSON.
         * @function toJSON
         * @memberof pb.Image
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Image.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Image;
    })();

    pb.File = (function() {

        /**
         * Properties of a File.
         * @memberof pb
         * @interface IFile
         * @property {number|Long|null} [id] File id
         * @property {string|null} [name] File name
         * @property {number|Long|null} [size] File size
         * @property {string|null} [url] File url
         */

        /**
         * Constructs a new File.
         * @memberof pb
         * @classdesc Represents a File.
         * @implements IFile
         * @constructor
         * @param {pb.IFile=} [properties] Properties to set
         */
        function File(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * File id.
         * @member {number|Long} id
         * @memberof pb.File
         * @instance
         */
        File.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * File name.
         * @member {string} name
         * @memberof pb.File
         * @instance
         */
        File.prototype.name = "";

        /**
         * File size.
         * @member {number|Long} size
         * @memberof pb.File
         * @instance
         */
        File.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * File url.
         * @member {string} url
         * @memberof pb.File
         * @instance
         */
        File.prototype.url = "";

        /**
         * Creates a new File instance using the specified properties.
         * @function create
         * @memberof pb.File
         * @static
         * @param {pb.IFile=} [properties] Properties to set
         * @returns {pb.File} File instance
         */
        File.create = function create(properties) {
            return new File(properties);
        };

        /**
         * Encodes the specified File message. Does not implicitly {@link pb.File.verify|verify} messages.
         * @function encode
         * @memberof pb.File
         * @static
         * @param {pb.IFile} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.name);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.size);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link pb.File.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.File
         * @static
         * @param {pb.IFile} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a File message from the specified reader or buffer.
         * @function decode
         * @memberof pb.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.File} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.File();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 12:
                    message.id = reader.int64();
                    break;
                case 13:
                    message.name = reader.string();
                    break;
                case 14:
                    message.size = reader.int64();
                    break;
                case 15:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.File} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a File message.
         * @function verify
         * @memberof pb.File
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        File.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a File message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.File
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.File} File
         */
        File.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.File)
                return object;
            var message = new $root.pb.File();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = false;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.File
         * @static
         * @param {pb.File} message File
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        File.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
                object.url = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this File to JSON.
         * @function toJSON
         * @memberof pb.File
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        File.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return File;
    })();

    pb.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof pb
         * @interface ILocation
         * @property {string|null} [desc] Location desc
         * @property {number|null} [latitude] Location latitude
         * @property {number|null} [longitude] Location longitude
         */

        /**
         * Constructs a new Location.
         * @memberof pb
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {pb.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location desc.
         * @member {string} desc
         * @memberof pb.Location
         * @instance
         */
        Location.prototype.desc = "";

        /**
         * Location latitude.
         * @member {number} latitude
         * @memberof pb.Location
         * @instance
         */
        Location.prototype.latitude = 0;

        /**
         * Location longitude.
         * @member {number} longitude
         * @memberof pb.Location
         * @instance
         */
        Location.prototype.longitude = 0;

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof pb.Location
         * @static
         * @param {pb.ILocation=} [properties] Properties to set
         * @returns {pb.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link pb.Location.verify|verify} messages.
         * @function encode
         * @memberof pb.Location
         * @static
         * @param {pb.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.desc);
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.longitude);
            return writer;
        };

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link pb.Location.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Location
         * @static
         * @param {pb.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Location();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.desc = reader.string();
                    break;
                case 2:
                    message.latitude = reader.double();
                    break;
                case 3:
                    message.longitude = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Location message.
         * @function verify
         * @memberof pb.Location
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Location.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            return null;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Location)
                return object;
            var message = new $root.pb.Location();
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Location
         * @static
         * @param {pb.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.desc = "";
                object.latitude = 0;
                object.longitude = 0;
            }
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof pb.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Location;
    })();

    pb.Product = (function() {

        /**
         * Properties of a Product.
         * @memberof pb
         * @interface IProduct
         * @property {string|null} [id] Product id
         * @property {string|null} [url] Product url
         * @property {string|null} [imgUrl] Product imgUrl
         * @property {number|null} [price] Product price
         */

        /**
         * Constructs a new Product.
         * @memberof pb
         * @classdesc Represents a Product.
         * @implements IProduct
         * @constructor
         * @param {pb.IProduct=} [properties] Properties to set
         */
        function Product(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Product id.
         * @member {string} id
         * @memberof pb.Product
         * @instance
         */
        Product.prototype.id = "";

        /**
         * Product url.
         * @member {string} url
         * @memberof pb.Product
         * @instance
         */
        Product.prototype.url = "";

        /**
         * Product imgUrl.
         * @member {string} imgUrl
         * @memberof pb.Product
         * @instance
         */
        Product.prototype.imgUrl = "";

        /**
         * Product price.
         * @member {number} price
         * @memberof pb.Product
         * @instance
         */
        Product.prototype.price = 0;

        /**
         * Creates a new Product instance using the specified properties.
         * @function create
         * @memberof pb.Product
         * @static
         * @param {pb.IProduct=} [properties] Properties to set
         * @returns {pb.Product} Product instance
         */
        Product.create = function create(properties) {
            return new Product(properties);
        };

        /**
         * Encodes the specified Product message. Does not implicitly {@link pb.Product.verify|verify} messages.
         * @function encode
         * @memberof pb.Product
         * @static
         * @param {pb.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.imgUrl != null && Object.hasOwnProperty.call(message, "imgUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.imgUrl);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.price);
            return writer;
        };

        /**
         * Encodes the specified Product message, length delimited. Does not implicitly {@link pb.Product.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Product
         * @static
         * @param {pb.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Product message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Product();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.imgUrl = reader.string();
                    break;
                case 4:
                    message.price = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Product message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Product message.
         * @function verify
         * @memberof pb.Product
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Product.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                if (!$util.isString(message.imgUrl))
                    return "imgUrl: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            return null;
        };

        /**
         * Creates a Product message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Product
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Product} Product
         */
        Product.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Product)
                return object;
            var message = new $root.pb.Product();
            if (object.id != null)
                message.id = String(object.id);
            if (object.url != null)
                message.url = String(object.url);
            if (object.imgUrl != null)
                message.imgUrl = String(object.imgUrl);
            if (object.price != null)
                message.price = Number(object.price);
            return message;
        };

        /**
         * Creates a plain object from a Product message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Product
         * @static
         * @param {pb.Product} message Product
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Product.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.url = "";
                object.imgUrl = "";
                object.price = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                object.imgUrl = message.imgUrl;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            return object;
        };

        /**
         * Converts this Product to JSON.
         * @function toJSON
         * @memberof pb.Product
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Product.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Product;
    })();

    pb.Order = (function() {

        /**
         * Properties of an Order.
         * @memberof pb
         * @interface IOrder
         * @property {string|null} [id] Order id
         * @property {string|null} [title] Order title
         * @property {string|null} [thumbnailUrl] Order thumbnailUrl
         * @property {number|null} [price] Order price
         * @property {number|Long|null} [num] Order num
         */

        /**
         * Constructs a new Order.
         * @memberof pb
         * @classdesc Represents an Order.
         * @implements IOrder
         * @constructor
         * @param {pb.IOrder=} [properties] Properties to set
         */
        function Order(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Order id.
         * @member {string} id
         * @memberof pb.Order
         * @instance
         */
        Order.prototype.id = "";

        /**
         * Order title.
         * @member {string} title
         * @memberof pb.Order
         * @instance
         */
        Order.prototype.title = "";

        /**
         * Order thumbnailUrl.
         * @member {string} thumbnailUrl
         * @memberof pb.Order
         * @instance
         */
        Order.prototype.thumbnailUrl = "";

        /**
         * Order price.
         * @member {number} price
         * @memberof pb.Order
         * @instance
         */
        Order.prototype.price = 0;

        /**
         * Order num.
         * @member {number|Long} num
         * @memberof pb.Order
         * @instance
         */
        Order.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Order instance using the specified properties.
         * @function create
         * @memberof pb.Order
         * @static
         * @param {pb.IOrder=} [properties] Properties to set
         * @returns {pb.Order} Order instance
         */
        Order.create = function create(properties) {
            return new Order(properties);
        };

        /**
         * Encodes the specified Order message. Does not implicitly {@link pb.Order.verify|verify} messages.
         * @function encode
         * @memberof pb.Order
         * @static
         * @param {pb.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.thumbnailUrl);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.price);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.num);
            return writer;
        };

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link pb.Order.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Order
         * @static
         * @param {pb.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Order();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.thumbnailUrl = reader.string();
                    break;
                case 4:
                    message.price = reader.double();
                    break;
                case 5:
                    message.num = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Order message.
         * @function verify
         * @memberof pb.Order
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl"))
                if (!$util.isString(message.thumbnailUrl))
                    return "thumbnailUrl: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            return null;
        };

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Order
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Order} Order
         */
        Order.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Order)
                return object;
            var message = new $root.pb.Order();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.thumbnailUrl != null)
                message.thumbnailUrl = String(object.thumbnailUrl);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.num != null)
                if ($util.Long)
                    (message.num = $util.Long.fromValue(object.num)).unsigned = false;
                else if (typeof object.num === "string")
                    message.num = parseInt(object.num, 10);
                else if (typeof object.num === "number")
                    message.num = object.num;
                else if (typeof object.num === "object")
                    message.num = new $util.LongBits(object.num.low >>> 0, object.num.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Order
         * @static
         * @param {pb.Order} message Order
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.thumbnailUrl = "";
                object.price = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl"))
                object.thumbnailUrl = message.thumbnailUrl;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            return object;
        };

        /**
         * Converts this Order to JSON.
         * @function toJSON
         * @memberof pb.Order
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Order;
    })();

    pb.Command = (function() {

        /**
         * Properties of a Command.
         * @memberof pb
         * @interface ICommand
         * @property {number|null} [code] Command code
         * @property {Uint8Array|null} [data] Command data
         */

        /**
         * Constructs a new Command.
         * @memberof pb
         * @classdesc Represents a Command.
         * @implements ICommand
         * @constructor
         * @param {pb.ICommand=} [properties] Properties to set
         */
        function Command(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Command code.
         * @member {number} code
         * @memberof pb.Command
         * @instance
         */
        Command.prototype.code = 0;

        /**
         * Command data.
         * @member {Uint8Array} data
         * @memberof pb.Command
         * @instance
         */
        Command.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Command instance using the specified properties.
         * @function create
         * @memberof pb.Command
         * @static
         * @param {pb.ICommand=} [properties] Properties to set
         * @returns {pb.Command} Command instance
         */
        Command.create = function create(properties) {
            return new Command(properties);
        };

        /**
         * Encodes the specified Command message. Does not implicitly {@link pb.Command.verify|verify} messages.
         * @function encode
         * @memberof pb.Command
         * @static
         * @param {pb.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link pb.Command.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Command
         * @static
         * @param {pb.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Command();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Command message.
         * @function verify
         * @memberof pb.Command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Command.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Command} Command
         */
        Command.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Command)
                return object;
            var message = new $root.pb.Command();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Command
         * @static
         * @param {pb.Command} message Command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Command to JSON.
         * @function toJSON
         * @memberof pb.Command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Command;
    })();

    pb.Input = (function() {

        /**
         * Properties of an Input.
         * @memberof pb
         * @interface IInput
         * @property {pb.PackageType|null} [type] Input type
         * @property {number|Long|null} [requestId] Input requestId
         * @property {Uint8Array|null} [data] Input data
         */

        /**
         * Constructs a new Input.
         * @memberof pb
         * @classdesc Represents an Input.
         * @implements IInput
         * @constructor
         * @param {pb.IInput=} [properties] Properties to set
         */
        function Input(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Input type.
         * @member {pb.PackageType} type
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.type = 0;

        /**
         * Input requestId.
         * @member {number|Long} requestId
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Input data.
         * @member {Uint8Array} data
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Input instance using the specified properties.
         * @function create
         * @memberof pb.Input
         * @static
         * @param {pb.IInput=} [properties] Properties to set
         * @returns {pb.Input} Input instance
         */
        Input.create = function create(properties) {
            return new Input(properties);
        };

        /**
         * Encodes the specified Input message. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @function encode
         * @memberof pb.Input
         * @static
         * @param {pb.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Input
         * @static
         * @param {pb.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Input();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.requestId = reader.int64();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Input message.
         * @function verify
         * @memberof pb.Input
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Input.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                    return "requestId: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Input
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Input} Input
         */
        Input.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Input)
                return object;
            var message = new $root.pb.Input();
            switch (object.type) {
            case "PT_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "PT_SIGN_IN":
            case 1:
                message.type = 1;
                break;
            case "PT_SYNC":
            case 2:
                message.type = 2;
                break;
            case "PT_HEARTBEAT":
            case 3:
                message.type = 3;
                break;
            case "PT_MESSAGE_ACK":
            case 4:
                message.type = 4;
                break;
            case "PT_MESSAGE_SERVICE":
            case 5:
                message.type = 5;
                break;
            }
            if (object.requestId != null)
                if ($util.Long)
                    (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                else if (typeof object.requestId === "string")
                    message.requestId = parseInt(object.requestId, 10);
                else if (typeof object.requestId === "number")
                    message.requestId = object.requestId;
                else if (typeof object.requestId === "object")
                    message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Input
         * @static
         * @param {pb.Input} message Input
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Input.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "PT_UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pb.PackageType[message.type] : message.type;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (typeof message.requestId === "number")
                    object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                else
                    object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Input to JSON.
         * @function toJSON
         * @memberof pb.Input
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Input.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Input;
    })();

    pb.Output = (function() {

        /**
         * Properties of an Output.
         * @memberof pb
         * @interface IOutput
         * @property {pb.PackageType|null} [type] Output type
         * @property {number|Long|null} [requestId] Output requestId
         * @property {number|null} [code] Output code
         * @property {string|null} [message] Output message
         * @property {Uint8Array|null} [data] Output data
         */

        /**
         * Constructs a new Output.
         * @memberof pb
         * @classdesc Represents an Output.
         * @implements IOutput
         * @constructor
         * @param {pb.IOutput=} [properties] Properties to set
         */
        function Output(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Output type.
         * @member {pb.PackageType} type
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.type = 0;

        /**
         * Output requestId.
         * @member {number|Long} requestId
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Output code.
         * @member {number} code
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.code = 0;

        /**
         * Output message.
         * @member {string} message
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.message = "";

        /**
         * Output data.
         * @member {Uint8Array} data
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Output instance using the specified properties.
         * @function create
         * @memberof pb.Output
         * @static
         * @param {pb.IOutput=} [properties] Properties to set
         * @returns {pb.Output} Output instance
         */
        Output.create = function create(properties) {
            return new Output(properties);
        };

        /**
         * Encodes the specified Output message. Does not implicitly {@link pb.Output.verify|verify} messages.
         * @function encode
         * @memberof pb.Output
         * @static
         * @param {pb.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link pb.Output.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Output
         * @static
         * @param {pb.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Output();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.requestId = reader.int64();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                case 5:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Output message.
         * @function verify
         * @memberof pb.Output
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Output.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                    return "requestId: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Output
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Output} Output
         */
        Output.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Output)
                return object;
            var message = new $root.pb.Output();
            switch (object.type) {
            case "PT_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "PT_SIGN_IN":
            case 1:
                message.type = 1;
                break;
            case "PT_SYNC":
            case 2:
                message.type = 2;
                break;
            case "PT_HEARTBEAT":
            case 3:
                message.type = 3;
                break;
            case "PT_MESSAGE_ACK":
            case 4:
                message.type = 4;
                break;
            case "PT_MESSAGE_SERVICE":
            case 5:
                message.type = 5;
                break;
            }
            if (object.requestId != null)
                if ($util.Long)
                    (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                else if (typeof object.requestId === "string")
                    message.requestId = parseInt(object.requestId, 10);
                else if (typeof object.requestId === "number")
                    message.requestId = object.requestId;
                else if (typeof object.requestId === "object")
                    message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Output
         * @static
         * @param {pb.Output} message Output
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Output.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "PT_UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestId = options.longs === String ? "0" : 0;
                object.code = 0;
                object.message = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pb.PackageType[message.type] : message.type;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (typeof message.requestId === "number")
                    object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                else
                    object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Output to JSON.
         * @function toJSON
         * @memberof pb.Output
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Output.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Output;
    })();

    pb.SyncInput = (function() {

        /**
         * Properties of a SyncInput.
         * @memberof pb
         * @interface ISyncInput
         * @property {number|Long|null} [seq] SyncInput seq
         */

        /**
         * Constructs a new SyncInput.
         * @memberof pb
         * @classdesc Represents a SyncInput.
         * @implements ISyncInput
         * @constructor
         * @param {pb.ISyncInput=} [properties] Properties to set
         */
        function SyncInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncInput seq.
         * @member {number|Long} seq
         * @memberof pb.SyncInput
         * @instance
         */
        SyncInput.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SyncInput instance using the specified properties.
         * @function create
         * @memberof pb.SyncInput
         * @static
         * @param {pb.ISyncInput=} [properties] Properties to set
         * @returns {pb.SyncInput} SyncInput instance
         */
        SyncInput.create = function create(properties) {
            return new SyncInput(properties);
        };

        /**
         * Encodes the specified SyncInput message. Does not implicitly {@link pb.SyncInput.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncInput
         * @static
         * @param {pb.ISyncInput} message SyncInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified SyncInput message, length delimited. Does not implicitly {@link pb.SyncInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SyncInput
         * @static
         * @param {pb.ISyncInput} message SyncInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncInput} SyncInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seq = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SyncInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SyncInput} SyncInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncInput message.
         * @function verify
         * @memberof pb.SyncInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncInput} SyncInput
         */
        SyncInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncInput)
                return object;
            var message = new $root.pb.SyncInput();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SyncInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncInput
         * @static
         * @param {pb.SyncInput} message SyncInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this SyncInput to JSON.
         * @function toJSON
         * @memberof pb.SyncInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncInput;
    })();

    pb.SyncOutput = (function() {

        /**
         * Properties of a SyncOutput.
         * @memberof pb
         * @interface ISyncOutput
         * @property {Array.<pb.IMessageItem>|null} [messages] SyncOutput messages
         */

        /**
         * Constructs a new SyncOutput.
         * @memberof pb
         * @classdesc Represents a SyncOutput.
         * @implements ISyncOutput
         * @constructor
         * @param {pb.ISyncOutput=} [properties] Properties to set
         */
        function SyncOutput(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncOutput messages.
         * @member {Array.<pb.IMessageItem>} messages
         * @memberof pb.SyncOutput
         * @instance
         */
        SyncOutput.prototype.messages = $util.emptyArray;

        /**
         * Creates a new SyncOutput instance using the specified properties.
         * @function create
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.ISyncOutput=} [properties] Properties to set
         * @returns {pb.SyncOutput} SyncOutput instance
         */
        SyncOutput.create = function create(properties) {
            return new SyncOutput(properties);
        };

        /**
         * Encodes the specified SyncOutput message. Does not implicitly {@link pb.SyncOutput.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.ISyncOutput} message SyncOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.pb.MessageItem.encode(message.messages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncOutput message, length delimited. Does not implicitly {@link pb.SyncOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.ISyncOutput} message SyncOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncOutput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncOutput} SyncOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncOutput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.pb.MessageItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SyncOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SyncOutput} SyncOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncOutput message.
         * @function verify
         * @memberof pb.SyncOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.pb.MessageItem.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SyncOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncOutput} SyncOutput
         */
        SyncOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncOutput)
                return object;
            var message = new $root.pb.SyncOutput();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".pb.SyncOutput.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".pb.SyncOutput.messages: object expected");
                    message.messages[i] = $root.pb.MessageItem.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.SyncOutput} message SyncOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.pb.MessageItem.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this SyncOutput to JSON.
         * @function toJSON
         * @memberof pb.SyncOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncOutput;
    })();

    pb.MessageACKInput = (function() {

        /**
         * Properties of a MessageACKInput.
         * @memberof pb
         * @interface IMessageACKInput
         * @property {number|Long|null} [deviceAck] MessageACKInput deviceAck
         * @property {number|Long|null} [receiveTime] MessageACKInput receiveTime
         */

        /**
         * Constructs a new MessageACKInput.
         * @memberof pb
         * @classdesc Represents a MessageACKInput.
         * @implements IMessageACKInput
         * @constructor
         * @param {pb.IMessageACKInput=} [properties] Properties to set
         */
        function MessageACKInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageACKInput deviceAck.
         * @member {number|Long} deviceAck
         * @memberof pb.MessageACKInput
         * @instance
         */
        MessageACKInput.prototype.deviceAck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageACKInput receiveTime.
         * @member {number|Long} receiveTime
         * @memberof pb.MessageACKInput
         * @instance
         */
        MessageACKInput.prototype.receiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MessageACKInput instance using the specified properties.
         * @function create
         * @memberof pb.MessageACKInput
         * @static
         * @param {pb.IMessageACKInput=} [properties] Properties to set
         * @returns {pb.MessageACKInput} MessageACKInput instance
         */
        MessageACKInput.create = function create(properties) {
            return new MessageACKInput(properties);
        };

        /**
         * Encodes the specified MessageACKInput message. Does not implicitly {@link pb.MessageACKInput.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageACKInput
         * @static
         * @param {pb.IMessageACKInput} message MessageACKInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageACKInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceAck != null && Object.hasOwnProperty.call(message, "deviceAck"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deviceAck);
            if (message.receiveTime != null && Object.hasOwnProperty.call(message, "receiveTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.receiveTime);
            return writer;
        };

        /**
         * Encodes the specified MessageACKInput message, length delimited. Does not implicitly {@link pb.MessageACKInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageACKInput
         * @static
         * @param {pb.IMessageACKInput} message MessageACKInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageACKInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageACKInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageACKInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageACKInput} MessageACKInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageACKInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageACKInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.deviceAck = reader.int64();
                    break;
                case 3:
                    message.receiveTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageACKInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageACKInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageACKInput} MessageACKInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageACKInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageACKInput message.
         * @function verify
         * @memberof pb.MessageACKInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageACKInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceAck != null && message.hasOwnProperty("deviceAck"))
                if (!$util.isInteger(message.deviceAck) && !(message.deviceAck && $util.isInteger(message.deviceAck.low) && $util.isInteger(message.deviceAck.high)))
                    return "deviceAck: integer|Long expected";
            if (message.receiveTime != null && message.hasOwnProperty("receiveTime"))
                if (!$util.isInteger(message.receiveTime) && !(message.receiveTime && $util.isInteger(message.receiveTime.low) && $util.isInteger(message.receiveTime.high)))
                    return "receiveTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a MessageACKInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageACKInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageACKInput} MessageACKInput
         */
        MessageACKInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageACKInput)
                return object;
            var message = new $root.pb.MessageACKInput();
            if (object.deviceAck != null)
                if ($util.Long)
                    (message.deviceAck = $util.Long.fromValue(object.deviceAck)).unsigned = false;
                else if (typeof object.deviceAck === "string")
                    message.deviceAck = parseInt(object.deviceAck, 10);
                else if (typeof object.deviceAck === "number")
                    message.deviceAck = object.deviceAck;
                else if (typeof object.deviceAck === "object")
                    message.deviceAck = new $util.LongBits(object.deviceAck.low >>> 0, object.deviceAck.high >>> 0).toNumber();
            if (object.receiveTime != null)
                if ($util.Long)
                    (message.receiveTime = $util.Long.fromValue(object.receiveTime)).unsigned = false;
                else if (typeof object.receiveTime === "string")
                    message.receiveTime = parseInt(object.receiveTime, 10);
                else if (typeof object.receiveTime === "number")
                    message.receiveTime = object.receiveTime;
                else if (typeof object.receiveTime === "object")
                    message.receiveTime = new $util.LongBits(object.receiveTime.low >>> 0, object.receiveTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MessageACKInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageACKInput
         * @static
         * @param {pb.MessageACKInput} message MessageACKInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageACKInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceAck = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceAck = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.receiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiveTime = options.longs === String ? "0" : 0;
            }
            if (message.deviceAck != null && message.hasOwnProperty("deviceAck"))
                if (typeof message.deviceAck === "number")
                    object.deviceAck = options.longs === String ? String(message.deviceAck) : message.deviceAck;
                else
                    object.deviceAck = options.longs === String ? $util.Long.prototype.toString.call(message.deviceAck) : options.longs === Number ? new $util.LongBits(message.deviceAck.low >>> 0, message.deviceAck.high >>> 0).toNumber() : message.deviceAck;
            if (message.receiveTime != null && message.hasOwnProperty("receiveTime"))
                if (typeof message.receiveTime === "number")
                    object.receiveTime = options.longs === String ? String(message.receiveTime) : message.receiveTime;
                else
                    object.receiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.receiveTime) : options.longs === Number ? new $util.LongBits(message.receiveTime.low >>> 0, message.receiveTime.high >>> 0).toNumber() : message.receiveTime;
            return object;
        };

        /**
         * Converts this MessageACKInput to JSON.
         * @function toJSON
         * @memberof pb.MessageACKInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageACKInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageACKInput;
    })();

    pb.MessageSrvInput = (function() {

        /**
         * Properties of a MessageSrvInput.
         * @memberof pb
         * @interface IMessageSrvInput
         * @property {string|null} [messageId] MessageSrvInput messageId
         * @property {pb.MsgSrvType|null} [serviceType] MessageSrvInput serviceType
         * @property {string|null} [senderId] MessageSrvInput senderId
         * @property {string|null} [senderDeviceId] MessageSrvInput senderDeviceId
         * @property {pb.ReceiverType|null} [receiverType] MessageSrvInput receiverType
         * @property {string|null} [receiverId] MessageSrvInput receiverId
         * @property {Array.<string>|null} [toUserIds] MessageSrvInput toUserIds
         * @property {pb.IMessageBody|null} [messageBody] MessageSrvInput messageBody
         * @property {number|Long|null} [sendTime] MessageSrvInput sendTime
         */

        /**
         * Constructs a new MessageSrvInput.
         * @memberof pb
         * @classdesc Represents a MessageSrvInput.
         * @implements IMessageSrvInput
         * @constructor
         * @param {pb.IMessageSrvInput=} [properties] Properties to set
         */
        function MessageSrvInput(properties) {
            this.toUserIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageSrvInput messageId.
         * @member {string} messageId
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.messageId = "";

        /**
         * MessageSrvInput serviceType.
         * @member {pb.MsgSrvType} serviceType
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.serviceType = 0;

        /**
         * MessageSrvInput senderId.
         * @member {string} senderId
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.senderId = "";

        /**
         * MessageSrvInput senderDeviceId.
         * @member {string} senderDeviceId
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.senderDeviceId = "";

        /**
         * MessageSrvInput receiverType.
         * @member {pb.ReceiverType} receiverType
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.receiverType = 0;

        /**
         * MessageSrvInput receiverId.
         * @member {string} receiverId
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.receiverId = "";

        /**
         * MessageSrvInput toUserIds.
         * @member {Array.<string>} toUserIds
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.toUserIds = $util.emptyArray;

        /**
         * MessageSrvInput messageBody.
         * @member {pb.IMessageBody|null|undefined} messageBody
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.messageBody = null;

        /**
         * MessageSrvInput sendTime.
         * @member {number|Long} sendTime
         * @memberof pb.MessageSrvInput
         * @instance
         */
        MessageSrvInput.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MessageSrvInput instance using the specified properties.
         * @function create
         * @memberof pb.MessageSrvInput
         * @static
         * @param {pb.IMessageSrvInput=} [properties] Properties to set
         * @returns {pb.MessageSrvInput} MessageSrvInput instance
         */
        MessageSrvInput.create = function create(properties) {
            return new MessageSrvInput(properties);
        };

        /**
         * Encodes the specified MessageSrvInput message. Does not implicitly {@link pb.MessageSrvInput.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageSrvInput
         * @static
         * @param {pb.IMessageSrvInput} message MessageSrvInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageSrvInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
            if (message.serviceType != null && Object.hasOwnProperty.call(message, "serviceType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serviceType);
            if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.senderId);
            if (message.senderDeviceId != null && Object.hasOwnProperty.call(message, "senderDeviceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderDeviceId);
            if (message.receiverType != null && Object.hasOwnProperty.call(message, "receiverType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.receiverType);
            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.receiverId);
            if (message.toUserIds != null && message.toUserIds.length)
                for (var i = 0; i < message.toUserIds.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.toUserIds[i]);
            if (message.messageBody != null && Object.hasOwnProperty.call(message, "messageBody"))
                $root.pb.MessageBody.encode(message.messageBody, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.sendTime);
            return writer;
        };

        /**
         * Encodes the specified MessageSrvInput message, length delimited. Does not implicitly {@link pb.MessageSrvInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageSrvInput
         * @static
         * @param {pb.IMessageSrvInput} message MessageSrvInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageSrvInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageSrvInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageSrvInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageSrvInput} MessageSrvInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageSrvInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageSrvInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.string();
                    break;
                case 2:
                    message.serviceType = reader.int32();
                    break;
                case 3:
                    message.senderId = reader.string();
                    break;
                case 4:
                    message.senderDeviceId = reader.string();
                    break;
                case 5:
                    message.receiverType = reader.int32();
                    break;
                case 6:
                    message.receiverId = reader.string();
                    break;
                case 7:
                    if (!(message.toUserIds && message.toUserIds.length))
                        message.toUserIds = [];
                    message.toUserIds.push(reader.string());
                    break;
                case 8:
                    message.messageBody = $root.pb.MessageBody.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sendTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageSrvInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageSrvInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageSrvInput} MessageSrvInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageSrvInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageSrvInput message.
         * @function verify
         * @memberof pb.MessageSrvInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageSrvInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                switch (message.serviceType) {
                default:
                    return "serviceType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isString(message.senderId))
                    return "senderId: string expected";
            if (message.senderDeviceId != null && message.hasOwnProperty("senderDeviceId"))
                if (!$util.isString(message.senderDeviceId))
                    return "senderDeviceId: string expected";
            if (message.receiverType != null && message.hasOwnProperty("receiverType"))
                switch (message.receiverType) {
                default:
                    return "receiverType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (!$util.isString(message.receiverId))
                    return "receiverId: string expected";
            if (message.toUserIds != null && message.hasOwnProperty("toUserIds")) {
                if (!Array.isArray(message.toUserIds))
                    return "toUserIds: array expected";
                for (var i = 0; i < message.toUserIds.length; ++i)
                    if (!$util.isString(message.toUserIds[i]))
                        return "toUserIds: string[] expected";
            }
            if (message.messageBody != null && message.hasOwnProperty("messageBody")) {
                var error = $root.pb.MessageBody.verify(message.messageBody);
                if (error)
                    return "messageBody." + error;
            }
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a MessageSrvInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageSrvInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageSrvInput} MessageSrvInput
         */
        MessageSrvInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageSrvInput)
                return object;
            var message = new $root.pb.MessageSrvInput();
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            switch (object.serviceType) {
            case "MST_CAI":
            case 0:
                message.serviceType = 0;
                break;
            case "MST_IM":
            case 1:
                message.serviceType = 1;
                break;
            case "MST_TIM":
            case 2:
                message.serviceType = 2;
                break;
            }
            if (object.senderId != null)
                message.senderId = String(object.senderId);
            if (object.senderDeviceId != null)
                message.senderDeviceId = String(object.senderDeviceId);
            switch (object.receiverType) {
            case "RT_UNKNOWN":
            case 0:
                message.receiverType = 0;
                break;
            case "RT_USER":
            case 1:
                message.receiverType = 1;
                break;
            case "RT_NORMAL_GROUP":
            case 2:
                message.receiverType = 2;
                break;
            case "RT_LARGE_GROUP":
            case 3:
                message.receiverType = 3;
                break;
            }
            if (object.receiverId != null)
                message.receiverId = String(object.receiverId);
            if (object.toUserIds) {
                if (!Array.isArray(object.toUserIds))
                    throw TypeError(".pb.MessageSrvInput.toUserIds: array expected");
                message.toUserIds = [];
                for (var i = 0; i < object.toUserIds.length; ++i)
                    message.toUserIds[i] = String(object.toUserIds[i]);
            }
            if (object.messageBody != null) {
                if (typeof object.messageBody !== "object")
                    throw TypeError(".pb.MessageSrvInput.messageBody: object expected");
                message.messageBody = $root.pb.MessageBody.fromObject(object.messageBody);
            }
            if (object.sendTime != null)
                if ($util.Long)
                    (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
                else if (typeof object.sendTime === "string")
                    message.sendTime = parseInt(object.sendTime, 10);
                else if (typeof object.sendTime === "number")
                    message.sendTime = object.sendTime;
                else if (typeof object.sendTime === "object")
                    message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MessageSrvInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageSrvInput
         * @static
         * @param {pb.MessageSrvInput} message MessageSrvInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageSrvInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.toUserIds = [];
            if (options.defaults) {
                object.messageId = "";
                object.serviceType = options.enums === String ? "MST_CAI" : 0;
                object.senderId = "";
                object.senderDeviceId = "";
                object.receiverType = options.enums === String ? "RT_UNKNOWN" : 0;
                object.receiverId = "";
                object.messageBody = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : 0;
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                object.serviceType = options.enums === String ? $root.pb.MsgSrvType[message.serviceType] : message.serviceType;
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = message.senderId;
            if (message.senderDeviceId != null && message.hasOwnProperty("senderDeviceId"))
                object.senderDeviceId = message.senderDeviceId;
            if (message.receiverType != null && message.hasOwnProperty("receiverType"))
                object.receiverType = options.enums === String ? $root.pb.ReceiverType[message.receiverType] : message.receiverType;
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                object.receiverId = message.receiverId;
            if (message.toUserIds && message.toUserIds.length) {
                object.toUserIds = [];
                for (var j = 0; j < message.toUserIds.length; ++j)
                    object.toUserIds[j] = message.toUserIds[j];
            }
            if (message.messageBody != null && message.hasOwnProperty("messageBody"))
                object.messageBody = $root.pb.MessageBody.toObject(message.messageBody, options);
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            return object;
        };

        /**
         * Converts this MessageSrvInput to JSON.
         * @function toJSON
         * @memberof pb.MessageSrvInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageSrvInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageSrvInput;
    })();

    pb.MessageOutput = (function() {

        /**
         * Properties of a MessageOutput.
         * @memberof pb
         * @interface IMessageOutput
         * @property {pb.MsgSrvType|null} [serviceType] MessageOutput serviceType
         * @property {pb.IMessageItem|null} [message] MessageOutput message
         */

        /**
         * Constructs a new MessageOutput.
         * @memberof pb
         * @classdesc Represents a MessageOutput.
         * @implements IMessageOutput
         * @constructor
         * @param {pb.IMessageOutput=} [properties] Properties to set
         */
        function MessageOutput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageOutput serviceType.
         * @member {pb.MsgSrvType} serviceType
         * @memberof pb.MessageOutput
         * @instance
         */
        MessageOutput.prototype.serviceType = 0;

        /**
         * MessageOutput message.
         * @member {pb.IMessageItem|null|undefined} message
         * @memberof pb.MessageOutput
         * @instance
         */
        MessageOutput.prototype.message = null;

        /**
         * Creates a new MessageOutput instance using the specified properties.
         * @function create
         * @memberof pb.MessageOutput
         * @static
         * @param {pb.IMessageOutput=} [properties] Properties to set
         * @returns {pb.MessageOutput} MessageOutput instance
         */
        MessageOutput.create = function create(properties) {
            return new MessageOutput(properties);
        };

        /**
         * Encodes the specified MessageOutput message. Does not implicitly {@link pb.MessageOutput.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageOutput
         * @static
         * @param {pb.IMessageOutput} message MessageOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serviceType != null && Object.hasOwnProperty.call(message, "serviceType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serviceType);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.pb.MessageItem.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessageOutput message, length delimited. Does not implicitly {@link pb.MessageOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageOutput
         * @static
         * @param {pb.IMessageOutput} message MessageOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageOutput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageOutput} MessageOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageOutput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serviceType = reader.int32();
                    break;
                case 2:
                    message.message = $root.pb.MessageItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageOutput} MessageOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageOutput message.
         * @function verify
         * @memberof pb.MessageOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                switch (message.serviceType) {
                default:
                    return "serviceType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.pb.MessageItem.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a MessageOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageOutput} MessageOutput
         */
        MessageOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageOutput)
                return object;
            var message = new $root.pb.MessageOutput();
            switch (object.serviceType) {
            case "MST_CAI":
            case 0:
                message.serviceType = 0;
                break;
            case "MST_IM":
            case 1:
                message.serviceType = 1;
                break;
            case "MST_TIM":
            case 2:
                message.serviceType = 2;
                break;
            }
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".pb.MessageOutput.message: object expected");
                message.message = $root.pb.MessageItem.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageOutput
         * @static
         * @param {pb.MessageOutput} message MessageOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serviceType = options.enums === String ? "MST_CAI" : 0;
                object.message = null;
            }
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                object.serviceType = options.enums === String ? $root.pb.MsgSrvType[message.serviceType] : message.serviceType;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.pb.MessageItem.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this MessageOutput to JSON.
         * @function toJSON
         * @memberof pb.MessageOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageOutput;
    })();

    return pb;
})();

module.exports = $root;
